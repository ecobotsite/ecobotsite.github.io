<template>
  <div class="home">
    <div class="header">
      <el-card class="statistic">
        <!--<el-tabs type="border-card">
          <el-tab-pane label="Найбрудніші">Пізніше тут буде топ найзабрудненіших станцій</el-tab-pane>
          <el-tab-pane label="Найчистіші">Пізніше тут буде топ найчистіших станцій</el-tab-pane>
        </el-tabs>-->
        <location-map :markers="markers" @chooseLocation="chooseLocationOnMap"/>
      </el-card>
      <el-card class="choose">
        <div class="required">
          <div class="station">
            <label>Оберіть станцію </label>
            <v-select 
              :disabled="this.loadingState.isStationLoading" 
              :loading="this.loadingState.isStationLoading" 
              v-model="selectedStation" :options="stationDisplayList" 
              label="displayName" :reduce="location => location.id">
              <template #spinner="{ loading }">
                <div v-if="loading" style="border-left-color: rgba(88,151,251,0.71)" class="vs__spinner"/>
              </template>
            </v-select>
          </div>

          <div class="date">
            <el-date-picker
              v-model="dateChoose"
              type="datetimerange"
              start-placeholder="Початок"
              end-placeholder="Кінець"
              :picker-options="pickerOptions"
              :clearable="false">
            </el-date-picker>
          </div>
        </div>
        <div class="user-action">
          <el-button class="refresh-button" type="primary" v-on:click="refresh"> 
            Оновити
          </el-button>
          <el-dropdown class="download-button" @command="saveData">
            <el-button type="primary">
              Завантажити <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="!loadingState.isDataLoaded" command="json">JSON</el-dropdown-item>
              <el-dropdown-item :disabled="true" command="csv">CSV</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-card>
    </div>
    <el-card>
      <charts class="display-data" v-if="!loadingState.isDataLoading" :measures="measures" />
      <div v-else>
        <el-progress v-for="(list, key) in Array.from(loadingState.measuresDownloadProgress)" :key="key" :percentage="Math.floor((list[1].current / list[1].total) * 100)">
        </el-progress>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Charts from '@/components/Charts.vue';
import { EventBus } from '@/event-bus'
import { substractDaysFromToday } from '@/utilities/substractDaysFromToday';
import { Location } from '@/models/responses/locations';
import DataService from '@/api/DataService';
import { RawData } from '@/models/responses/rawData';
import { AxiosResponse } from 'axios';
import { SpecificRawData } from '@/models/responses/specificRawData';
import {LocationNamed} from '@/models/data/locationNamed';
import setDateTimePickerValue from '@/utilities/setDateTimePickerValue';
// @ts-ignore
import { latLng } from "leaflet";
import LocationMap from '@/components/LocationMap.vue';
import FileSaver from '@/utilities/FileSaver';


@Component({
  components: {
    Charts,
    LocationMap,
  },
})
export default class Home extends Vue {
  private totalMeasurementCount = 6;

  private loadingState = {
    isStationLoading: false,
    isDataLoading: false,
    isDataLoaded: false,
    measuresDownloadProgress: new Map<number, {current: number, total: number}>(),
  }

  private pickerOptions = {
    shortcuts: [{
      text: 'Остання неділя',
      onClick(picker: any) {setDateTimePickerValue(picker, 3600 * 1000 * 24 * 7)}
    }, {
      text: 'Останній місяць',
      onClick(picker: any) {setDateTimePickerValue(picker, 3600 * 1000 * 24 * 30)}
    }, {
      text: 'Останні 3 місяці',
      onClick(picker: any) {setDateTimePickerValue(picker, 3600 * 1000 * 24 * 90)}
    }]
  }

  private measures: RawData = {
    id: "",
    city: "",
    stationName: "",
    localName: "",
    timezone: null,
    lat: 0.0,
    lon: 0.0,
    pm25: [],
    pm10: [],
    temperature: [],
    humidity: [],
    pressure: [],
    qualityIndex: [],
  };

  private selectedStation: string|null = null;

  private dateChoose: Array<Date> = [substractDaysFromToday(2), new Date()]

  private markers: any[] = []

  private stationList: Location[] = []
  private stationDisplayList: LocationNamed[] = [];

  private dataService: DataService = new DataService()

  private async created() {
    this.loadingState.isStationLoading = true;

    await this.dataService.getLocations().then(async x => {
      this.stationList = x.data.sort((obj1, obj2) => {
          if (obj1.city > obj2.city) {
              return 1;
          }

          if (obj1.city < obj2.city) {
              return -1;
          }

          return 0;
      });

      this.stationDisplayList = []

      this.stationList.forEach((x) => {
        this.stationDisplayList.push({
          id: x.id,
          displayName: `${x.city} - ${x.stationName}`,
        })
        if (x.lat && x.lon)
          this.markers.push({id: x.id, lat: x.lat, lng: x.lon})
      })

      this.loadingState.isStationLoading = false;
    })
  }

  private chooseLocationOnMap(location: {locationId: string}) {
    console.log(location)
    const loc = this.stationList.filter(x => x.id === location.locationId)[0];
    if (loc)
      this.selectedStation = loc.id
  }

  private async refresh() {
    if (this.selectedStation === null) {
      this.$notify.error({
        title: 'Виберіть станцію',
        message: 'Перед оновленням данних потрібно вибрати станцію'
      });
      return;
    }
    const stationId = this.selectedStation.split("_")[1]

    await this.loadData(stationId, this.dateChoose[0], this.dateChoose[1])
  }

  private generateLoadTasks(id: string, from: Date, to: Date) {
    let tasks = []
    for (let i=0; i < this.totalMeasurementCount; i++) {
      tasks.push(this.dataService.getSpecificData(id, from, to, i, this.onMeasureDownloadProgress(i)))
      this.loadingState.measuresDownloadProgress.set(i, {current: 0, total: 100})
    }
    return tasks;
  }

  private onMeasureDownloadProgress(measureTypeId: number) {
    return (event: ProgressEvent) => {
      this.loadingState.measuresDownloadProgress.set(measureTypeId, {total: event.total, current: event.loaded})
      
      this.$forceUpdate()
    }
  }

  private async loadData(id: string, from: Date, to: Date) {
    this.loadingState.isDataLoading = true;
    this.loadingState.isDataLoaded = false;

    this.loadingState.measuresDownloadProgress = new Map<number, {current: number, total: number}>();

    Promise.allSettled([
      ...this.generateLoadTasks(id, from, to)
    ]).then((x: any) => {
      x.forEach((response: any) => {
        if (response.status == "fulfilled") {
          if (response.value.status === 200) {
            this.measures.id = response.value.data.id
            this.measures.city = response.value.data.city
            this.measures.lat = response.value.data.lat
            this.measures.lon = response.value.data.lon
            this.measures.stationName = response.value.data.stationName
            this.measures.localName = response.value.data.localName

            this.measures.pm10 = response.value.data.pollutantType === 2 ? response.value.data.data : this.measures.pm10
            this.measures.pm25 = response.value.data.pollutantType === 3 ? response.value.data.data : this.measures.pm25
            this.measures.temperature = response.value.data.pollutantType === 5 ? response.value.data.data : this.measures.temperature
            this.measures.humidity = response.value.data.pollutantType === 1 ? response.value.data.data : this.measures.humidity
            this.measures.pressure = response.value.data.pollutantType === 4 ? response.value.data.data : this.measures.pressure
            this.measures.qualityIndex = response.value.data.pollutantType === 0 ? response.value.data.data : this.measures.qualityIndex
          }
        }
      })

      this.loadingState.isDataLoading = false;
      this.loadingState.isDataLoaded = true;

      setTimeout(() => {
        EventBus.$emit('refresh')
      }, 0)
    })
  }

  private saveData(type: string) {
    if (type === "json") {
      var blob = new Blob([JSON.stringify(this.measures, null, 4)], {type: "text/json;charset=utf-8"});
      FileSaver.saveAs(blob, `${this.measures.id}.json`);
    } else if (type === "csv") {
      //let csv = obj2csv(this.measures)

      //console.log(csv)
    }
  }
}
</script>

<style lang="scss" scoped>
.refresh-button {
  width: 100%;
}

.header {
  display: flex;
}

.statistic {
  width: 60%;
}

.el-card {
  margin: 0.4em;
}
.choose {
  display: flex;
  flex-direction: column;
  overflow: unset;
  //align-items: flex-end;

  width: 40%;
  //margin-left: 10%;

  .required {
    flex: 1;

    > * {
      margin: 1rem 0;
    }
  }
}

.station {
  display: flex;
  
  label {
    margin: 5px;
  }
}

.v-select {
  flex: 1;
}

.user-action {
  display: flex;

  > * {
    margin: 0 1rem;
  }
}
</style>

<style lang="scss">
.choose {
  .el-card__body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 90%;
  }
}
</style>
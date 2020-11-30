<template>
  <div class="home">
    <div class="header">
      <el-card class="statistic">
        <el-tabs type="border-card">
          <el-tab-pane label="Найбрудніші">Пізніше тут буде топ найзабрудненіших станцій</el-tab-pane>
          <el-tab-pane label="Найчистіші">Пізніше тут буде топ найчистіших станцій</el-tab-pane>
        </el-tabs>
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
              :clearable="false">
            </el-date-picker>
          </div>
        </div>

        <el-button class="refresh-button" type="primary" v-on:click="refresh"> 
          Оновити
        </el-button>
      </el-card>
    </div>
    <el-card>
      <charts class="display-data" v-if="!loadingState.isDataLoading" :measures="measures" />
      <loader class="display-data" v-else/>
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
import Loader from '@/components/Loader.vue';
import { AxiosResponse } from 'axios';
import { SpecificRawData } from '@/models/responses/specificRawData';
import {LocationNamed} from '@/models/data/locationNamed';

@Component({
  components: {
    Charts,
    Loader,
  },
})
export default class Home extends Vue {
  private loadingState = {
    isStationLoading: false,
    isDataLoading: false,
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
      })

      //await this.refresh()
      this.loadingState.isStationLoading = false;
    })
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
    for (let i=0; i < 6; i++) {
      tasks.push(this.dataService.getSpecificData(id, from, to, i))
    }
    return tasks;
  }

  private async loadData(id: string, from: Date, to: Date) {
    this.loadingState.isDataLoading = true
    Promise.allSettled([
      ...this.generateLoadTasks(id, from, to)
    ]).then((x: any) => {
      x.forEach((response: any) => {
        if (response.status == "fulfilled") {
          if (response.value.status === 200) {
            this.measures.id = response.value.data.id
            this.measures.city = response.value.data.city
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
      setTimeout(() => {
        EventBus.$emit('refresh')
      }, 0)
    })
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
</style>

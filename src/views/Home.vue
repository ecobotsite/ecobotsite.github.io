<template>
  <div class="home">
    <section class="choose">
      <div class="required">
        <div class="station">
          <label>Оберіть станцію </label>
          <div class="select">
            <select @change="newStation($event)" name="station" id="stations">
              <option v-for="i in stationList" :key="i.id" :value="i.id">{{i.city}} - {{i.stationName}}</option>
            </select>
          </div>
        </div>

        <div class="date">
          <VueCtkDateTimePicker v-model="dateChoose" :range="true" label="Оберіть відрізок часу"/>
        </div>
      </div>

      <div class="refresh">
        <button v-on:click="refresh">
          Оновити
        </button>
      </div>
    </section>
    <charts class="display-data" v-if="!loadingState.isDataLoading" :measures="measures" />
    <loader class="display-data" v-else/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Charts from '@/components/Charts.vue';
import { EventBus } from '@/event-bus'
import { substractDaysFromToday } from '@/utilities/substractDaysFromToday';
import { Location } from '@/models/responses/locations';
import DataService from '@/api/DataService';
// @ts-ignore
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { RawData } from '@/models/responses/rawData';
import Loader from '@/components/Loader.vue';
import { AxiosResponse } from 'axios';
import { SpecificRawData } from '@/models/responses/specificRawData';

@Component({
  components: {
    Charts,
    DateRangePicker,
    Loader,
  },
})
export default class Home extends Vue {
  private loadingState = {
    isDataLoading: true,
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

  private chosenStation: string = "1569";
  private dateChoose: {start: string, end: string} = {start: substractDaysFromToday(2).toISOString(), end: new Date().toISOString()};

  private dataService: DataService = new DataService()

  private stationList: Location[] = []

  private newStation(event: Event) {
    // @ts-ignore
    let id: string = event.target.value
    this.chosenStation = id.split("_")[1]
    console.log(this.chosenStation)
  }

  private async created() {
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

      await this.refresh()
    })
  }

  private async refresh() {
    console.log(this.dateChoose)
    await this.loadData(this.chosenStation, this.dateChoose.start, this.dateChoose.end)
  }

  private async loadData(id: string, from: string, to: string) {
    this.loadingState.isDataLoading = true
    Promise.allSettled([
      this.dataService.getSpecificData(id, from.replace("вечера", "pm").replace("ночи", "am"), to.replace("вечера", "pm").replace("ночи", "am"), 0),
      this.dataService.getSpecificData(id, from.replace("вечера", "pm").replace("ночи", "am"), to.replace("вечера", "pm").replace("ночи", "am"), 1),
      this.dataService.getSpecificData(id, from.replace("вечера", "pm").replace("ночи", "am"), to.replace("вечера", "pm").replace("ночи", "am"), 2),
      this.dataService.getSpecificData(id, from.replace("вечера", "pm").replace("ночи", "am"), to.replace("вечера", "pm").replace("ночи", "am"), 3),
      this.dataService.getSpecificData(id, from.replace("вечера", "pm").replace("ночи", "am"), to.replace("вечера", "pm").replace("ночи", "am"), 4),
      this.dataService.getSpecificData(id, from.replace("вечера", "pm").replace("ночи", "am"), to.replace("вечера", "pm").replace("ночи", "am"), 5),
    ]).then((x: [PromiseSettledResult<AxiosResponse<SpecificRawData>>, PromiseSettledResult<AxiosResponse<SpecificRawData>>, PromiseSettledResult<AxiosResponse<SpecificRawData>>, PromiseSettledResult<AxiosResponse<SpecificRawData>>, PromiseSettledResult<AxiosResponse<SpecificRawData>>, PromiseSettledResult<AxiosResponse<SpecificRawData>>]) => {
      x.forEach((response: PromiseSettledResult<AxiosResponse<SpecificRawData>>) => {
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
.display-data {
  height: 80vh;
}

.choose {
  height: 20vh;
  display: flex;
  flex-direction: column;

  width: 80%;
  margin-left: 10%;

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

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  box-shadow: none;
  border: 1px solid dodgerblue;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 2em;
  line-height: 2;
  background: #8092a5;
  overflow: hidden;
  border-radius: .25em;
}
select {
  flex: 1;
  padding: 0 .5em;
  color: black;
  border: 1px solid dodgerblue;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.5em;
  background: #657d94;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
</style>

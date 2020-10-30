<template>
  <div class="home">
    <section>
      <label for="name">Pick station</label>
      <select @change="newStation($event)" name="station" id="stations">
        <option v-for="i in stationList" :key="i.id" :value="i.id">{{i.city}} - {{i.stationName}}</option>
      </select>

      <VueCtkDateTimePicker v-model="dateFromChoose" label="Оберіть дату початку"/>
      <VueCtkDateTimePicker v-model="dateToChoose" label="Оберіть дату кінця"/>

      <button v-on:click="refresh">
        Оновити
      </button>
    </section>
    <charts/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Charts from '@/components/Charts.vue';
import { EventBus } from '@/event-bus'
import { substractDaysFromToday } from '@/utilities/substractDaysFromToday';
import { Location } from '@/models/responses/locations';
import DataService from '@/api/DataService';

@Component({
  components: {
    Charts
  },
})
export default class Home extends Vue {
  private chosenStation!: string;
  private dateFromChoose: string = substractDaysFromToday(2).toISOString();
  private dateToChoose: string = new Date().toISOString();

  private dataService: DataService = new DataService()

  private stationList: Location[] = []

  private newStation(event: Event) {
    // @ts-ignore
    let id: string = event.target.value
    this.chosenStation = id.split("_")[1]
    console.log(this.chosenStation)
  }

  private async created() {
    await this.dataService.getLocations().then(x => {
      console.log(x.data)
      this.stationList = x.data
    })
  }

  private refresh() {
    EventBus.$emit('refresh', {
      id: this.chosenStation,
      from: new Date(this.dateFromChoose),
      to: new Date(this.dateToChoose),
    })
  }
}
</script>

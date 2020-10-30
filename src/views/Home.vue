<template>
  <div class="home">
    <section>
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

@Component({
  components: {
    Charts
  },
})
export default class Home extends Vue {
  private dateFromChoose: string = substractDaysFromToday(2).toISOString();
  private dateToChoose: string = new Date().toISOString();

  private refresh() {
    EventBus.$emit('refresh', {
      from: new Date(this.dateFromChoose),
      to: new Date(this.dateToChoose),
    })
  }
}
</script>

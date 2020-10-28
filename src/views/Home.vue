<template>
  <div class="home">
    <section>
      <VueCtkDateTimePicker v-model="dateChoose" label="Оберіть дату"/>

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

@Component({
  components: {
    Charts
  },
})
export default class Home extends Vue {
  private dateChoose: string = new Date().toISOString();

  private refresh() {
    EventBus.$emit('refresh', {date: new Date(this.dateChoose)})
  }
}
</script>

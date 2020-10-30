<template>
  <div v-if="!loadingState.isDataLoading" class="charts">
    <highcharts :constructorType="'stockChart'" :options="chartOptions[i-1]" v-for="i in 6" :key="i"></highcharts>
  </div>
</template>

<script lang="ts">
import DataService from '@/api/DataService';
import { RawData } from '@/models/responses/rawData';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import apiClient from '../api/ApiClient';
import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts';
import { EventBus } from '@/event-bus'
import { substractDaysFromToday } from '@/utilities/substractDaysFromToday';

@Component({
  components: {
    highcharts: Chart,
  },
})
export default class Charts extends Vue {
  private dataTime: Date = new Date();

  private loadingState = {
    isDataLoading: true,
  }

  private dataService: DataService = new DataService();

  private measures!: RawData;
  private chartOptions = [
    {
      title: {
        text: 'PM 2.5/PM 10'
      },
      yAxis: [
        { 
          title: {
            text: 'PM 2.5'
          }
        },
        { 
          title: {
            text: 'PM 10'
          },
        },
      ],
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          turboThreshold: 5000,
          yAxis: 0,
          name: 'PM2.5',
          data: [],
          color: '#FF530D'
        },
        {
          turboThreshold: 5000,
          yAxis: 1,
          name: 'PM10',
          data: [],
        },
      ]
    },
    {
      title: {
        text: 'PM 2.5'
      },
      yAxis: [
        { 
          title: {
            text: 'PM2.5'
          }
        },
      ],
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          turboThreshold: 5000,
          yAxis: 0,
          name: 'PM2.5',
          data: [],
        },
      ]
    },
    {
      title: {
        text: 'PM 10'

      },
      yAxis: [
        { 
          title: {
            text: 'PM10'
          }
        },
      ],
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          turboThreshold: 5000,
          yAxis: 0,
          name: 'PM10',
          data: [],
          color: '#FF530D'
        },
      ]
    },
    {
      title: {
        text: 'Температура'

      },
      yAxis: [
        { 
          title: {
            text: 'Температура Celsium'
          }
        },
      ],
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          turboThreshold: 5000,
          yAxis: 0,
          name: 'Температура Celsium',
          data: [],
          color: '#BA55D3'
        },
      ]
    },
    {
      title: {
        text: 'Вологість'

      },
      yAxis: [
        { 
          title: {
            text: 'Вологість'
          }
        },
      ],
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          turboThreshold: 5000,
          yAxis: 0,
          name: 'Вологість',
          data: [],
          color: '#4682B4'
        },
      ]
    },
    {
      title: {
        text: 'Тиск (гПа)'

      },
      yAxis: [
        { 
          title: {
            text: 'Тиск (гПа)'
          }
        },
      ],
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          turboThreshold: 5000,
          yAxis: 0,
          name: 'Тиск (гПа)',
          data: [],
          color: '#FF7F50'
        },
      ]
    }
  ]

  async created() {
    EventBus.$on("extremes-changed", (props: { chartId: number; min: number|undefined; max: number|undefined; }) => {
      Highcharts.charts.forEach(chart => {
        if (chart && chart.index !== props.chartId) {
          chart.xAxis[0].setExtremes(props.min, props.max);
        }
      });
    });

    EventBus.$on("refresh", async (props: {id: string, from: Date, to: Date }) => {
        console.log(props)
        await this.loadData(props.id, props.from, props.to)
    })

    await this.loadData("1569", substractDaysFromToday(2), this.dataTime)
  }

  private async loadData(id: string, from: Date, to: Date) {
    this.loadingState.isDataLoading = true
    await this.dataService.getData(id, from, to)
      .then((x) => {
        this.measures = x.data;
        console.log(this.measures)
        console.log(this.measures)
        this.loadingState.isDataLoading = false;

        // @ts-ignore
        this.chartOptions[0].series[0].data = this.measures.pm25
        // @ts-ignore
        this.chartOptions[0].series[1].data = this.measures.pm10
        
        // @ts-ignore
        this.chartOptions[1].series[0].data = this.measures.pm25

        // @ts-ignore
        this.chartOptions[2].series[0].data = this.measures.pm10

        // @ts-ignore
        this.chartOptions[3].series[0].data = this.measures.temperature

        // @ts-ignore
        this.chartOptions[4].series[0].data = this.measures.humidity

        // @ts-ignore
        this.chartOptions[5].series[0].data = this.measures.pressure
        console.log(this.chartOptions[5].series[0].data)
      })
  }
}
</script>

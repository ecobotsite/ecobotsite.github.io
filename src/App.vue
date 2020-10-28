<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import apiClient from '@/api/ApiClient';

@Component({
  components: {

  },
})
export default class App extends Vue {

}
</script>

<style>
html, body {
  background: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<template>
  <div style="height: 400px; width: 100%">
    <l-map v-if="showMap" :zoom="zoom" :center="center" :options="mapOptions">
      <!--<l-tile-layer :url="url"/>-->
      <l-control-layers
        :position="'topright'"
        :collapsed="false"
        :sort-layers="true"
      />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        layer-type="base"
      />
      <l-layer-group
        layer-type="overlay"
        name="Забрудненість"
        :visible.sync="showHeatMap"
      />
      <l-layer-group
        layer-type="overlay"
        name="Станції"
        :visible.sync="showMarkers"
      />
      <div v-if="showMarkers">
      <l-marker 
        v-for="(marker, index) in markers"
        :lat-lng="[marker.lat, marker.lng]"
        :key="index"
        :icon="choosedLocation === marker.id ? iconChoosed : iconNotChoosed"
        @click="chooseLocation(marker.id)"
      />
      </div>
      <LeafletHeatmap v-if="showHeatMap" :lat-lngs="heatMarkers" :radius="30" :min-opacity=".75" :max-zoom="10" :blur="40"/>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
// @ts-ignore
import { latLng, icon } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers
} from 'vue2-leaflet';
import { Location } from "@/models/responses/locations";
import LeafletHeatmap from "@/components/Vue2LeafletHeatmap.vue";

@Component({
  components: {
    LeafletHeatmap,
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
  },
})
export default class LocationMap extends Vue {
  @Prop() markers!: { id: number; lat: number; lng: number }[];
  @Prop() heatMarkers!: any[];

  private showHeatMap: boolean = true;
  private showMarkers: boolean = true;

  private choosedLocation: string = "";

  private zoom: number = 6.5;
  private center: any = latLng(49.791474, 30.608503);
  private url: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  private showParagraph: boolean = false;
  private mapOptions: {
    zoomSnap: number;
  } = {
    zoomSnap: 0.5,
  };
  private showMap: boolean = true;

  private tileProviders = [
    {
      name: 'OpenStreetMap',
      visible: true,
      attribution: '',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
    {
      name: 'OpenTopoMap',
      visible: false,
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      attribution: '',
    },
  ];

  iconNotChoosed: any = icon({
    iconUrl: "https://marker.nanoka.fr/map_pin-FF0000-FFF-FF0000-A-40.svg",
    iconSize: [32, 37],
    iconAnchor: [16, 37],
  });

  iconChoosed: any = icon({
    iconUrl:
      "https://marker.nanoka.fr/map_pin-FF0000-FFF-FF0000-%E2%9C%BF-40.svg",
    iconSize: [32, 37],
    iconAnchor: [16, 37],
  });

  private chooseLocation(locationId: string) {
    this.choosedLocation = locationId;
    this.$emit("chooseLocation", { locationId });
  }

  @Watch('showHeatMap')
  public onChangeHeatMap(value: any) {
    
  }
}
</script>

<style lang="scss">
.leaflet-top.leaflet-right {
  text-align: justify;
}
</style>
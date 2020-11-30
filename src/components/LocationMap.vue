<template>
  <div style="height: 400px; width: 100%">
    <l-map v-if="showMap" :zoom="zoom" :center="center" :options="mapOptions">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        v-for="(marker, index) in markers"
        :lat-lng="[marker.lat, marker.lng]"
        :key="index"
        :icon="choosedLocation === marker.id ? iconChoosed : iconNotChoosed"
        @click="chooseLocation(marker.id)"
      >
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// @ts-ignore
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Location } from "@/models/responses/locations";

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
})
export default class LocationMap extends Vue {
  @Prop() markers!: { id: number; lat: number; lng: number }[];

  private choosedLocation: string = "";

  private zoom: number = 6.5;
  private center: any = latLng(49.791474, 30.608503);
  private url: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  private attribution: string =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  private showParagraph: boolean = false;
  private mapOptions: {
    zoomSnap: number;
  } = {
    zoomSnap: 0.5,
  };
  private showMap: boolean = true;

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
}
</script>

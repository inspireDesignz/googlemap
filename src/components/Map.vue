/* eslint-disable max-len */
/* eslint-disable max-len */
<template>
  <div>
    <div>
      <h2>Draw breadcrumb </h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br />

    </div>
    <br>
    <gmap-map :center="center" :zoom="10" style="width:100%;  height: 400px;">
      <GmapPolyline v-if="orangeBreadCrumb"
        :path="orangeBreadCrumb"
        :options="orangeBreadCrumbOptions"
      />
      <GmapPolyline v-if="redBreadCrumb"
        :path="redBreadCrumb"
        :options="redBreadCrumbOptions"
      />
      <GmapPolyline v-if="greenBreadCrumb"
        :path="greenBreadCrumb"
        :options="greenBreadCrumbOptions"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      // Center the map at the defined coordinates
      center: { lat: 45.167, lng: -73.187 },

      // add the marker to the gmap
      markers: [
        { position: { lat: 45.508, lng: -73.587 } },
        { position: { lat: 45.491, lng: -73.487 } },
        { position: { lat: 45.342, lng: -73.387 } },
        { position: { lat: 45.167, lng: -73.187 } },
      ],
      places: [],
      currentPlace: null,

      // Draw orange breadcrumb to the gmap
      orangeBreadCrumb: [
        { lat: 45.508, lng: -73.587 },
        { lat: 45.491, lng: -73.487 },
      ],

      // Draw Red breadcrumb to the gmap
      redBreadCrumb: [
        { lat: 45.342, lng: -73.387 },
        { lat: 45.167, lng: -73.187 },
      ],

      // Draw Green breadcrumb to the gmap
      greenBreadCrumb: [
        { lat: 45.491, lng: -73.487 },
        { lat: 45.167, lng: -73.187 },
      ],

      /**
       * Breadcrumb color and line style options to the gmap also can
       * add shapes and direction arrows etc.
       */
      orangeBreadCrumbOptions: {
        strokeColor: '#FFA500',
        strokeOpacity: 1.0,
        strokeWeight: 5,
      },

      /**
       * Breadcrumb color and line style options to the gmap also can
       * add shapes and direction arrows etc.
       */
      redBreadCrumbOptions: {
        strokeColor: '#d43352',
        strokeOpacity: 1.0,
        strokeWeight: 5,
      },

      /**
       * Breadcrumb color and line style options to the gmap also can
       * add shapes and direction arrows etc.
       */
      greenBreadCrumbOptions: {
        strokeColor: '#00FF00',
        strokeOpacity: 1.0,
        strokeWeight: 5,
      },
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      // if (this.currentPlace) {
      const marker = {
        lat: '12.9716',
        lng: '77.5946',
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
      // }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(() => {
        this.center = {
          lat: 45.167,
          lng: -73.187,
        };
      });
    },
  },
};
</script>

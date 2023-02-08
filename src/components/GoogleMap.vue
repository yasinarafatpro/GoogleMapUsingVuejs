<template>
    <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 1300px; height: 500px"
    >
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
      </GMapCluster>
    </GMapMap>
    <!-- <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      ref="myMapRef"
      :disableDefaultUI="true"
  /> -->
  </template>
  <script>
import { ref,watch } from 'vue';

function addMyButton(map) {
  const controlUI = document.createElement("button");
  controlUI.title = "Click to zoom the map";
  const controlText = document.createElement("div");
  controlText.innerHTML = `Center`;
  controlUI.appendChild(controlText);
  
  controlUI.addEventListener("click", () => {
    map.setZoom(map.getZoom() + 1);
  });

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlUI); // eslint-disable-line no-undef
}
  export default {
    setup(){
        const myMapRef=ref();
        watch(myMapRef,googleMap=>{
            if(googleMap){
                googleMap.$mapPromise.then(map=>{
                    addMyButton(map)
                })
            }
        });
        return {
            myMapRef
        }
    },

    name: 'GoogleMap',
    data() {
      return {
        center: {lat: 51.093048, lng: 6.842120},
        markers: [
          {
            position: {
              lat: 51.093048, lng: 6.842120
            },
          },
          {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
        ]
      }
    }
  }
  </script>
  <style>
  body {
    margin: 0;
  }
  </style>
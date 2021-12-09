import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import mapStyle from "./mapStyle.json";

import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slice/navSlice";

export default function Map() {
  const origin = useSelector(selectOrigin);
  console.log(origin);

  const mapRef = useRef(null);

  useEffect(() => {
    if (origin) {
      mapRef.current.animateToRegion({
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [origin]);

  return (
    <MapView
      ref={mapRef}
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        title={origin.name}
        description={origin.description}
        identifier="origin"
        draggable
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});

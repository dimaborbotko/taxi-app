import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import mapStyle from "./mapStyle.json";

import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slice/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

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
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="red"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});

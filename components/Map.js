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

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 700, right: 100, bottom: 100, left: 100 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: 46.8442,
        longitude: 35.3804,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
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
      )}

      {origin && destination && (
        <View>
          <MapViewDirections
            origin={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            destination={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            lineDashPattern={[0]}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={5}
            strokeColor="red"
          />
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            title={destination.name}
            description={destination.description}
            identifier="destination"
            draggable
          />
        </View>
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

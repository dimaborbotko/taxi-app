import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import mapStyle from "./mapStyle.json";

import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectWayPoint,
} from "../slice/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const wayPoint = useSelector(selectWayPoint);

  const mapRef = useRef(null);

  useEffect(() => {
    if (origin) {
      mapRef.current.animateToRegion({
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [origin]);

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination", "wayPoint"], {
      edgePadding: { top: 1150, right: 250, bottom: 320, left: 250 },
    });
  }, [destination, wayPoint]);

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
      {origin && (
        <Marker
          coordinate={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          title={origin.name}
          description={origin.description}
          identifier="origin"
          draggable
          >
          <Image style={{width: 20, height: 20}} source={require("../assets/meeting-point.png")}/>
          </Marker>
      )}

      {origin && destination && wayPoint && (
        <View>
          <MapViewDirections
            origin={{
              latitude: origin.latitude,
              longitude: origin.longitude,
            }}
            destination={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            lineDashPattern={[0]}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={5}
            strokeColor="red"
            waypoints={[
              {
                latitude: wayPoint.location.lat,
                longitude: wayPoint.location.lng,
              },
            ]}
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
          >
            <Image style={{width: 20, height: 20}} source={require("../assets/placeholder.png")}/>
          </Marker>
          {wayPoint?.location && (
            <Marker
              coordinate={{
                latitude: wayPoint.location.lat,
                longitude: wayPoint.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              title={wayPoint.name}
              description={wayPoint.description}
              identifier="wayPoint"
              draggable
            >
              <Image style={{width: 20, height: 20}} source={require("../assets/placeholder.png")}/>
            </Marker>
          )}
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

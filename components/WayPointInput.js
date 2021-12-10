import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setWaypoint } from "../slice/navSlice";
import { useDispatch, useSelector } from "react-redux";

export default function WayPointInput() {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          flex: 0,
          alignItems: "center",
          marginBottom: 20,
        },
        textInputContainer: {
          width: "90%",
        },
        textInput: {
          fontFamily: "qsb",
          fontSize: 14,
        },
        listView: {
          maxHeight: 200,
          width: "90%",
        },
        row: {
          backgroundColor: "#cad1d9",
        },
        separator: {
          backgroundColor: "#fff",
          height: 1,
        },
      }}
      enablePoweredByContainer={false}
      minLength={2}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      placeholder="Way Point?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      onPress={(data, details = null) => {
        dispatch(
          setWaypoint({
            location: details.geometry.location,
            description: data.description,
            name: details.name,
          })
        );
        console.log(data);
      }}
      fetchDetails={true}
      returnKeyType={"search"}
    />
  );
}

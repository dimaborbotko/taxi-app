import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setOrigin } from "../slice/navSlice";
import { useDispatch } from "react-redux";

export default function OriginAutocomplete({ setAddressText, active }) {
  const ref = useRef();
  useEffect(() => {
    if (active == true) {
      ref.current.setAddressText("My current location");
    } else {
      ref.current.setAddressText("");
    }
  }, [active]);
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      ref={ref}
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
      placeholder="Where from?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
            name: details.name,
          })
        );
        console.log(data);
      }}
      fetchDetails={true}
      returnKeyType={"search"}
      setAddressText={setAddressText}
    />
  );
}

const styles = StyleSheet.create({});

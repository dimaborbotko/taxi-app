import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import BtnSubmit from "../registration/BtnSubmit";
import { auth } from "../../components/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { mainStyles } from "./mainStyle";
import { useDispatch } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../../slice/navSlice";
import Map from "../../components/Map";
import BtnCurrLoc from "./BtnCurrLoc";

export default function Main({ navigation }) {
  const [user, setUser] = useState({});
  const logOutUser = async () => {
    await signOut(auth);
    navigation.navigate("registration");
    console.log(logOutUser);
  };

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigation.navigate("registration");
    }
    setUser(currentUser);
  });

  const ref = useRef()
  const [active, setActive] = useState(false)

  useEffect( () => {
    if(active == true) {
      ref.current.setAddressText("My current location")
    } else {
      ref.current.setAddressText("")
    }
  }, [active])
  // useEffect( () => {
  //   ref.current.setAddressText("")
  // }, [])

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.box}>
        <Map />
        <View style={mainStyles.inputBox}>
          <View style={mainStyles.textBox}>
            <Text style={mainStyles.greeting}>Welcome Back, {user?.email}</Text>
            <Text style={mainStyles.title}>Where are you going?</Text>
          </View>

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
              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            setAddressText={"My current location"}
            // setAddressText={"My current location" ? active == true : ''}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            dispatch(
              setOrigin({
                location: {
                  lat: 46.8442169648067, 
                  lng: 35.38044187451933,
                },
              })
            )
            setActive(true)
            console.log(active)
          }}
        >
          <BtnCurrLoc text="Use my current Location" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 140,
  },
  autocomp: {
    flex: 1,
  },
});

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import BtnSubmit from "../registration/BtnSubmit";
import { auth } from "../../components/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { mainStyles } from "./mainStyle";

export default function Main({ navigation }) {
  const [user, setUser] = useState({});
  const logOutUser = async () => {
    await signOut(auth);
    navigation.navigate("registration");
    console.log(logOutUser);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigation.navigate("registration");
    }
    setUser(currentUser);
  });



  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.box}>
        <View style={mainStyles.inputBox}>
          <View style={mainStyles.textBox}>
            <Text style={mainStyles.greeting}>Welcome Back, {user?.email}</Text>
            <Text style={mainStyles.title}>Where are you going?</Text>
          </View>
          
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                alignItems: "center",
                marginBottom: 20
              },
              textInputContainer: {
                width: "90%",
              },
            }}
            enablePoweredByContainer={false}
            minLength={3}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            placeholder="Where from?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity activeOpacity={0.7} onPress={logOutUser}>
          <BtnSubmit text="Sign Out" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
  },
  autocomp: {
    flex: 1,
  },
});

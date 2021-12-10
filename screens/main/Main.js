import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import BtnSubmit from "../registration/BtnSubmit";
import { auth } from "../../components/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { mainStyles } from "./mainStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
} from "../../slice/navSlice";
import Map from "../../components/Map";
import BtnCurrLoc from "./BtnCurrLoc";
import { Fontisto } from "@expo/vector-icons";
import { mStyles } from "../mobileValidation/styleMobValid";
import { Entypo } from "@expo/vector-icons";
import BtnReg from "../registration/BtnReg";

export default function Main({ navigation }) {
  const [user, setUser] = useState({});
  const logOutUser = async () => {
    await signOut(auth);
    navigation.navigate("registration");
    console.log(logOutUser);
  };

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigation.navigate("registration");
    }
    setUser(currentUser);
  });

  const ref = useRef();
  const btnRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active == true) {
      ref.current.setAddressText("My current location");
    } else {
      ref.current.setAddressText("");
    }
  }, [active]);
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
                zIndex: 20,
                position: "absolute",
                marginTop: "15%",
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
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                  name: details.name,
                })
              );
              console.log(data);
              // dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            setAddressText={"My current location"}
            // setAddressText={"My current location" ? active == true : ''}
          />
          <View style={styles.toGo}>
            <View style={{ marginLeft: 20, marginBottom: 18, marginTop: -10 }}>
              <Fontisto name="arrow-return-right" size={20} color="#414560" />
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
                console.log(data);
              }}
              fetchDetails={true}
              returnKeyType={"search"}
              setAddressText={"My current location"}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={active ? { display: "none" } : { display: "flex" }}
          activeOpacity={0.7}
          onPress={() => {
            dispatch(
              setOrigin({
                location: {
                  lat: 46.8442,
                  lng: 35.3804,
                },
              })
            );
            setActive(true);
          }}
        >
          <View
            style={[
              styles.btnLoc,
              active
                ? { borderColor: "transparent" }
                : { borderColor: "#2076db" },
            ]}
          >
            <View style={styles.pos}>
              <Entypo name="direction" size={24} color="#2076db" />
              <Text style={styles.btnText}>My current location</Text>
            </View>
          </View>
        </TouchableOpacity>
        {destination && origin && (
          <TouchableOpacity activeOpacity={0.7}>
            <BtnSubmit text="Apply" />
          </TouchableOpacity>
        )}
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
    bottom: 100,
  },
  autocomp: {
    flex: 1,
  },
  toGo: {
    width: "100%",
  },
  btnLoc: {
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  pos: {
    flexDirection: "row",
    padding: 10,
  },
  btnText: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 10,
    color: "#2076db",
  },
});

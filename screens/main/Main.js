import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { get, ref as firebaseRef } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Destination from "../../components/Destinstion";
import { auth, database } from "../../components/firebase";
import IconsAreas from "../../components/IconsAreas";
import Map from "../../components/Map";
import OriginAutocomplete from "../../components/OriginAutocomplete";
import PickUpTaxi from "../../components/PickUpTaxi";
import PremiumDrivers from "../../components/PremiumDrivers";
import StandartDrivers from "../../components/StandartDrivers";
import VanDrivers from "../../components/VanDrivers";
import WayPointInput from "../../components/WayPointInput";
import {
  selectBtnWayPoint,
  selectDestination,
  selectOrigin,
  selectApply,
  selectRequest,
  selectLocation,
  setOrigin,
  setRequest,
  setApply,
  setLocation,
} from "../../slice/navSlice";
import { selectPremium, selectStandart, selectVan } from "../../slice/typeCar";
import BtnSubmit from "../registration/BtnSubmit";
import BtnCard from "./BtnCard";
import BtnDecline from "./BtnDecline";
import BtnPickUp from "./BtnPickUp";
import { mainStyles } from "./mainStyle";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Main({ navigation }) {
  // States
  const [driver, setDriver] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  // drivers database
  useEffect(async () => {
    const dbRef = firebaseRef(database);
    const db = await get(dbRef);
    setDriver(db.val());
  }, []);

  // Redux Selectors
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const standart = useSelector(selectStandart);
  const van = useSelector(selectVan);
  const premium = useSelector(selectPremium);
  const btnWayPoint = useSelector(selectBtnWayPoint);
  const apply = useSelector(selectApply);
  const request = useSelector(selectRequest);
  const location = useSelector(selectLocation);

  // If not login go to registration form
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigation.navigate("registration");
    } else {
      navigation.navigate("drawer");
    }
    setUser(currentUser);
  });

  // Request for geolocation permission and getting current location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(setLocation(location));
    })();
  }, []);

  // Check geolocation error
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // Redux
  const dispatch = useDispatch();

  return (
    // Routing
    <View style={mainStyles.container}>
      <Map />
      <View style={[mainStyles.box]}>
        <View
          style={[
            mainStyles.inputBox,
            request === true ? { display: "none" } : { display: "flex" },
          ]}
        >
          <View style={mainStyles.textBox}>
            <Text style={mainStyles.greeting}>Welcome Back, {user?.email}</Text>
            <Text style={mainStyles.title}>Where are you going?</Text>
          </View>

          {/* Destination and waypoint searching areas */}
          <Destination />
          {btnWayPoint && <WayPointInput />}

          {/* Icons between searching areas */}
          <View style={styles.toGo}>
            <IconsAreas />

            {/* Origin searching area */}
            <OriginAutocomplete
              setAddressText={"My current location"}
              active={active}
            />
          </View>
        </View>
      </View>
      {request && (
        <View style={mainStyles.box}>
          <View style={[mainStyles.inputBox, styles.infCont]}>
            <TouchableOpacity
              style={styles.back}
              activeOpacity={0.7}
              onPress={() => dispatch(setRequest(false))}
            >
              <Ionicons name="arrow-back-circle" size={45} color="#fff" />
            </TouchableOpacity>
            <View style={styles.timeInfo}>
              <Text style={styles.subText}>I`ll be at your</Text>
              <Text style={styles.text}>place in 5 minutes</Text>
            </View>
          </View>
        </View>
      )}

      {/* Btn my current location */}
      <View style={styles.btn}>
        <TouchableOpacity
          style={active ? { display: "none" } : { display: "flex" }}
          activeOpacity={0.7}
          onPress={() => {
            dispatch(
              setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
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

        {/* Apply btn */}
        {destination && origin && (
          <TouchableOpacity
            style={
              apply || request == true
                ? { display: "none" }
                : { display: "flex" }
            }
            activeOpacity={0.7}
            onPress={() => [dispatch(setApply(true)), console.log(apply)]}
          >
            <BtnSubmit text="Apply" />
          </TouchableOpacity>
        )}
      </View>

      {/* Btns location and menu bottom */}
      <View style={styles.btnsBottoms}>
        <View style={styles.containerIcon}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={[
              styles.boxMenu,
              apply || request == true
                ? { display: "none" }
                : { display: "flex" },
            ]}
          >
            <Ionicons name="menu-outline" size={35} color="#bfc0c4" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.boxLocation,
              apply || request == true
                ? { display: "none" }
                : { display: "flex" },
            ]}
            onPress={() => {
              dispatch(
                setOrigin({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                })
              );
            }}
          >
            <MaterialCommunityIcons
              name="vector-circle"
              size={35}
              color="#bfc0c4"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Choose type of car */}
      {apply && (
        <View style={styles.pickUp}>
          <PickUpTaxi />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("standart")}
          >
            <BtnCard />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => [
              dispatch(setRequest(true)),
              dispatch(setApply(false)),
            ]}
          >
            <BtnPickUp text="Request" />
          </TouchableOpacity>
        </View>
      )}

      {/* Drivers */}
      {request && standart && (
        <View style={styles.pickUp}>
          <StandartDrivers />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => [
              dispatch(setRequest(false)),
              dispatch(setApply(true)),
              console.log(apply),
            ]}
          >
            <BtnDecline text="Decline" />
          </TouchableOpacity>
        </View>
      )}
      {request && van && (
        <View style={styles.pickUp}>
          <VanDrivers />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => [
              dispatch(setRequest(false)),
              dispatch(setApply(true)),
            ]}
          >
            <BtnDecline text="Decline" />
          </TouchableOpacity>
        </View>
      )}
      {request && premium && (
        <View style={styles.pickUp}>
          <PremiumDrivers />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => [
              dispatch(setRequest(false)),
              dispatch(setApply(true)),
            ]}
          >
            <BtnDecline text="Decline" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
  },
  infCont: {
    flexDirection: "row",
    borderRadius: 5,
  },
  timeInfo: {
    marginLeft: 10,
    marginVertical: 15,
  },
  back: {
    marginLeft: 10,
  },
  subText: {
    fontFamily: "qb",
    fontSize: 17,
    color: "#414560",
  },
  text: {
    fontFamily: "qb",
    fontSize: 28,
    color: "#414560",
  },
  btn: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 100,
  },
  btnsBottoms: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    bottom: 40,
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
  pickUp: {
    width: "90%",
    alignSelf: "center",
    bottom: 0,
    position: "absolute",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  driver: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  name: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 10,
    color: "#414560",
  },
  car: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 10,
    color: "#414560",
  },
  imgDriver: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cost: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 10,
    color: "#414560",
    textAlign: "right",
  },
  boxDriver: {
    flexDirection: "row",
  },
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  boxMenu: {
    backgroundColor: "#fff",
    paddingHorizontal: 3,
    paddingLeft: 4,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  boxLocation: {
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: 25,
    elevation: 4,
  },
});

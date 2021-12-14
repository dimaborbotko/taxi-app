import { get, ref as firebaseRef } from "firebase/database";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  setPremium, setStandart,
  setVan
} from "../slice/typeCar";
import { database } from "./firebase";

export default function PickUpTaxi() {
  const dispatch = useDispatch();

  const [driver, setDriver] = useState(null);
  useEffect(async () => {
    const dbRef = firebaseRef(database);
    const db = await get(dbRef);
    setDriver(db.val());
  }, []);
  if(!driver){
    return(
      <ActivityIndicator />
    )
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.typeCar}
          onPress={() => [
            dispatch(setStandart(true)),
            dispatch(setPremium(false)),
            dispatch(setVan(false)),
          ]}
        >
          <Image style={styles.img} source={require("../assets/car.png")} />
          <Text style={styles.title}>Standart</Text>
          <View>
            <Text style={styles.textCost}>{driver.Standart.John.cost}$</Text>
            <Text style={styles.textTime}>4min</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.typeCar}
          onPress={() => [
            dispatch(setStandart(false)),
            dispatch(setPremium(false)),
            dispatch(setVan(true)),
          ]}
        >
          <Image style={styles.img} source={require("../assets/van.png")} />
          <Text style={styles.title}>Van</Text>
          <View>
            <Text style={styles.textCost}>{driver.Van.Michael.cost}$</Text>
            <Text style={styles.textTime}>7min</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.typeCar}
          onPress={() => [
            dispatch(setStandart(false)),
            dispatch(setPremium(true)),
            dispatch(setVan(false)),
          ]}
        >
          <Image
            style={styles.img}
            source={require("../assets/sedan-car-model.png")}
          />
          <Text style={styles.title}>Premium</Text>
          <View style={styles.info}>
            <Text style={styles.textCost}>{driver.Premium.Willam.cost}$</Text>
            <Text style={styles.textTime}>2min</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  typeCar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  img: {
    width: 50,
    height: 40,
  },
  title: {
    fontFamily: "qb",
    fontSize: 18,
    color: "#414560",
  },
  info: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  textCost: {
    fontFamily: "qb",
    fontSize: 18,
    color: "#414560",
  },
  textTime: {
    fontFamily: "qsb",
    fontSize: 12,
    color: "#cad1d9",
  },
});

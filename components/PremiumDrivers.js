import { get, ref as firebaseRef } from "firebase/database";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { database } from "./firebase";

export default function PremiumDrivers() {
  const [driver, setDriver] = useState(null);
  useEffect(async () => {
    const dbRef = firebaseRef(database);
    const db = await get(dbRef);
    setDriver(db.val());
  }, []);

  console.log(driver);
  if (!driver) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.driver}>
        <View style={styles.boxDriver}>
            <Image style={styles.imgDriver} source={{uri: `${driver.Premium.Willam.img}`}}/>
            <View style={styles.info}>
                <Text style={styles.name}>{driver.Premium.Willam.name}</Text>
                <Text style={styles.car}>{driver.Premium.Willam.car}</Text>
            </View>
        </View>
        <Text style={styles.cost}>{driver.Premium.Willam.cost}$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
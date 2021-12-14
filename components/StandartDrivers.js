import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextComponent,
  TouchableOpacity,
  View,
} from "react-native";
import { get, ref as firebaseRef } from "firebase/database";
import { database } from "./firebase";
import { dStyles } from "../screens/main/driverStyle";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function StandartDrivers() {
  const [driver, setDriver] = useState(null);
  useEffect(async () => {
    const dbRef = firebaseRef(database);
    const db = await get(dbRef);
    setDriver(db.val());
  }, []);
  if (!driver) {
    return <ActivityIndicator />;
  }
  return (
    <View style={dStyles.driver}>
      <View style={dStyles.boxDriver}>
        <Image
          style={dStyles.imgDriver}
          source={{ uri: `${driver.Standart.John.img}` }}
        />
        <View style={dStyles.info}>
          <Text style={dStyles.name}>{driver.Standart.John.name}</Text>
          <Text style={dStyles.car}>{driver.Standart.John.car}</Text>
          <Text style={dStyles.cost}>{driver.Standart.John.cost}$</Text>
        </View>
      </View>
      <View style={dStyles.driverInfo}>
        <TouchableOpacity style={dStyles.menu} activeOpacity={0.7}>
          <Ionicons name="ios-menu-outline" size={25} color="#428be7" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome5 name="phone-square" size={35} color="#428be7" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

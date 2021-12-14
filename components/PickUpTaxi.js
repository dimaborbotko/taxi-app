import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setStandart,
  setVan,
  setPremium,
  selectStandart,
  selectVan,
  selectPremium,
} from "../slice/typeCar";

export default function PickUpTaxi() {
  const dispatch = useDispatch();
  const standart = useSelector(selectStandart);
  const van = useSelector(selectVan);
  const premium = useSelector(selectPremium);
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
            <Text style={styles.textCost}>5$</Text>
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
            <Text style={styles.textCost}>5$</Text>
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
            <Text style={styles.textCost}>5$</Text>
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

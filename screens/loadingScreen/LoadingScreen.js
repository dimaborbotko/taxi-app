import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import BtnLoading from "./BtnLoading";

export default function LoadingScreen({navigation}) {
  const selector = useSelector((state) => state.load.value);
  const dispatch = useDispatch();
  const [loaded] = useFonts({
    ql: require("../../fonts/Quicksand-Light.ttf"),
    qr: require("../../fonts/Quicksand-Regular.ttf"),
    qm: require("../../fonts/Quicksand-Medium.ttf"),
    qsb: require("../../fonts/Quicksand-SemiBold.ttf"),
    qb: require("../../fonts/Quicksand-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.title}>
          Taxi<Text style={styles.logoTwo}>Screw</Text>
        </Text>
        <Image
          style={styles.img}
          source={require("../../assets/helloScreens/taxi-stop.png")}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('sliderHello')}>
          <BtnLoading /> 
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe257",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  logoTwo: {
    color: "#3894ff",
  },
  title: {
    fontFamily: "qb",
    fontSize: 68.4,
    marginBottom: -10,
  },
  img: {
    resizeMode: "contain",
    height: "45.6%",
  },
});

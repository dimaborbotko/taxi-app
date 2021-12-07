import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BtnLoading from "./BtnLoading";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function LoadingScreen({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isFirstLaunched, setIsFirstLaunched] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          ql: require("../../fonts/Quicksand-Light.ttf"),
          qr: require("../../fonts/Quicksand-Regular.ttf"),
          qm: require("../../fonts/Quicksand-Medium.ttf"),
          qsb: require("../../fonts/Quicksand-SemiBold.ttf"),
          qb: require("../../fonts/Quicksand-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunched(true);
      } else {
        setIsFirstLaunched(false);
      }
    });
  }, []);

  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched === true) {
    return (
      <View  style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.title}>
            Taxi<Text style={styles.logoTwo}>Screw</Text>
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/helloScreens/taxi-stop.png")}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.push("sliderHello")}
        >
          <BtnLoading />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View  style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.title}>
            Taxi<Text style={styles.logoTwo}>Screw</Text>
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/helloScreens/taxi-stop.png")}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.push("registration")}
        >
          <BtnLoading />
        </TouchableOpacity>
      </View>
    );
  }
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
    // fontFamily: "qb",
    fontSize: 68.4,
    marginBottom: -10,
  },
  img: {
    resizeMode: "contain",
    height: "45.6%",
  },
});

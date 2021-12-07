import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import SliderHello from "../firstStart/SliderHello";
import SetNumber from "../../screens/mobileValidation/SetNumber";
import GetCode from "../../screens/mobileValidation/GetCode";
import Form from "../../screens/registration/Form";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

const fonts = () =>
  Font.loadAsync({
    ql: require("../../fonts/Quicksand-Light.ttf"),
    qr: require("../../fonts/Quicksand-Regular.ttf"),
    qm: require("../../fonts/Quicksand-Medium.ttf"),
    qsb: require("../../fonts/Quicksand-SemiBold.ttf"),
    qb: require("../../fonts/Quicksand-Bold.ttf"),
  });

export default function StackNavigation() {
  const [isFirstLaunched, setIsFirstLaunched] = useState(null);
  const [font, setFont] = useState(false);
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

  if (font) {
    if (isFirstLaunched === null) {
      return null;
    } else if (isFirstLaunched === true) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="sliderHello" component={SliderHello} />
            <Stack.Screen name="mobileValid" component={SetNumber} />
            <Stack.Screen name="getCode" component={GetCode} />
            <Stack.Screen name="registration" component={Form} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="mobileValid" component={SetNumber} />
            <Stack.Screen name="getCode" component={GetCode} />
            <Stack.Screen name="registration" component={Form} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({});

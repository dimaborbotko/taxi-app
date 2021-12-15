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
import Main from "../../screens/main/Main";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { auth } from "../../components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import StandartDrivers from "../StandartDrivers";
import DrawerNavigation from "./DrawerNavigation";
import Settings from "../../screens/Settings";

const Stack = createNativeStackNavigator();
const fonts = () =>
  Font.loadAsync({
    ql: require("../../fonts/Quicksand-Light.ttf"),
    qr: require("../../fonts/Quicksand-Regular.ttf"),
    qm: require("../../fonts/Quicksand-Medium.ttf"),
    qsb: require("../../fonts/Quicksand-SemiBold.ttf"),
    qb: require("../../fonts/Quicksand-Bold.ttf"),
  });

export default function StackNavigation({navigation}) {
  const [user, setUser] = useState({});
  const [isFirstLaunched, setIsFirstLaunched] = useState(null);
  const [isEmailLogin, setIsEmailLogin] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [font, setFont] = useState(false);
  useEffect(async () => {
    await AsyncStorage.getItem("alreadyLaunched").then((value) => {
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
            <Stack.Screen name="main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else{
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="drawer" component={DrawerNavigation} />
            <Stack.Screen name="registration" component={Form} />
            <Stack.Screen name="standart" component={StandartDrivers} />
            <Stack.Screen name="settings" component={Settings} />
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

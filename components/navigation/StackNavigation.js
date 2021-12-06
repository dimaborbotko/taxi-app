import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../../screens/loadingScreen/LoadingScreen";
import SliderHello from "../firstStart/SliderHello";
import SetNumber from "../../screens/mobileValidation/SetNumber";
import GetCode from "../../screens/mobileValidation/GetCode";
import Form from "../../screens/registration/Form";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="sliderHello" component={SliderHello} />
        <Stack.Screen name="mobileValid" component={SetNumber} />
        <Stack.Screen name="getCode" component={GetCode} />
        <Stack.Screen name="registration" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

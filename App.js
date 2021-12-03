import React from "react";
import { StyleSheet, Text, View } from "react-native";
import store from "./store/store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import StackNavigation from "./components/navigation/StackNavigation";

export default function App() {
  const [loaded] = useFonts({
    ql: require("./fonts/Quicksand-Light.ttf"),
    qr: require("./fonts/Quicksand-Regular.ttf"),
    qm: require("./fonts/Quicksand-Medium.ttf"),
    qsb: require("./fonts/Quicksand-SemiBold.ttf"),
    qb: require("./fonts/Quicksand-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StackNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4bed1",
  },
});

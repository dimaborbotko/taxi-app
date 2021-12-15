import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./store";
import { Provider } from "react-redux";
import StackNavigation from "./components/navigation/StackNavigation";
import 'react-native-gesture-handler';
import DrawerNavigation from "./components/navigation/DrawerNavigation";


export default function App() {
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

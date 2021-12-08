import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BtnSubmit from "../registration/BtnSubmit";
import { auth } from "../../components/firebase";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Main({ navigation }) {
  const [user, setUser] = useState({});
  const logOutUser = async () => {
    await signOut(auth);
    navigation.navigate("registration");
    console.log(logOutUser);
  };

  onAuthStateChanged(auth, (currentUser) => {
      if(!currentUser){
          navigation.navigate('registration')
      } 
    setUser(currentUser);
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={logOutUser}>
        <BtnSubmit text="Sign Out" />
      </TouchableOpacity>
      <Text>{user?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

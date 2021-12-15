import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/firebase";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomDrawer(props) {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  const logOutUser = async () => {
    await signOut(auth);
    navigation.navigate("registration");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profImg} source={require("../assets/user.png")} />
        <Text style={styles.name}>Dima Borbotko</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <View style={styles.listItem}>
        <DrawerItemList {...props} />
      </View>
      <DrawerContentScrollView {...props}></DrawerContentScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.logout}
        onPress={logOutUser}
      >
        <MaterialIcons name="logout" size={24} color="#ff4b5545" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#ff4b5545",
    marginBottom: 10,
    paddingBottom: 10,
  },
  listItem: {},
  profImg: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginLeft: 20,
  },
  logout: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ff4b5545",
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  logoutText: {
    fontFamily: "qsb",
    fontSize: 15,
    color: "#ff4b5545",
    marginLeft: 10,
  },
  name: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 23,
    marginTop: 5,
    color: "#414560",
  },
  email: {
    fontFamily: "qsb",
    fontSize: 14,
    marginLeft: 23,
    marginTop: 3,
    color: "#414560",
    opacity: 0.9
  }
});

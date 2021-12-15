import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/Home";
import Notification from "../../screens/Notification";
import History from "../../screens/History";
import MyWallet from "../../screens/MyWallet";
import Settings from "../../screens/Settings";
import Logout from "../../screens/Logout";
import CustomDrawer from "../CustomDrawer";
import Main from "../../screens/main/Main";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Main} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="MyWallet" component={MyWallet} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

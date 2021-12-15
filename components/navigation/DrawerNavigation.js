import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import History from "../../screens/History";
import Main from "../../screens/main/Main";
import MyWallet from "../../screens/MyWallet";
import Notification from "../../screens/Notification";
import Settings from "../../screens/Settings";
import CustomDrawer from "../CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Main} options={{drawerLabelStyle: {color: '#414560', fontFamily: 'qb', fontSize: 14}, drawerActiveTintColor: '#f54b55', drawerHideStatusBarOnOpen: true} }/>
      <Drawer.Screen name="Notifications" component={Notification} options={{drawerLabelStyle: {color: '#414560', fontFamily: 'qb', fontSize: 14}, drawerActiveTintColor: '#f54b55', } }/>
      <Drawer.Screen name="History" component={History} options={{drawerLabelStyle: {color: '#414560', fontFamily: 'qb', fontSize: 14}, drawerActiveTintColor: '#f54b55', } }/>
      <Drawer.Screen name="MyWallet" component={MyWallet} options={{drawerLabelStyle: {color: '#414560', fontFamily: 'qb', fontSize: 14}, drawerActiveTintColor: '#f54b55', } }/>
      <Drawer.Screen name="Settings" component={Settings} options={{drawerLabelStyle: {color: '#414560', fontFamily: 'qb', fontSize: 14}, drawerActiveTintColor: '#f54b55', } }/>
    </Drawer.Navigator>
  );
}

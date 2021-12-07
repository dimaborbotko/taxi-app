import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonHello from "./ButtonHello";
import { hStyle } from "./styleHello";

export default function SliderHello({ navigation }) {
  const [isFirstLaunched, setIsFirstLaunched] = useState(null)

  useEffect(async () => {
    const appData = AsyncStorage.getItem('isFirstLaunched', isFirstLaunched)
    console.log(appData)
    if(appData == null){
      setIsFirstLaunched(true)
      AsyncStorage.setItem('isFirstLaunched', 'false')
    } else {
      setIsFirstLaunched(false)
    }
  }, [])
  return (
    <View style={hStyle.container}>
      <Swiper
        style={hStyle.wrapper}
        showsButtons={false}
        dotColor="#fff"
        activeDotColor="#474747"
      >
        <View style={hStyle.slide1}>
          <Image
            style={hStyle.img}
            source={require("../../assets/helloScreens/firtst.png")}
          />
          <View style={hStyle.boxText}>
            <Text style={hStyle.text}>Check fare</Text>
            <Text style={hStyle.subText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View style={hStyle.slide2}>
          <Image
            style={hStyle.img}
            source={require("../../assets/helloScreens/second.png")}
          />
          <View style={hStyle.boxText}>
            <Text style={hStyle.text}>Book a ride</Text>
            <Text style={hStyle.subText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View style={hStyle.slide3}>
          <Image
            style={hStyle.img}
            source={require("../../assets/helloScreens/third.png")}
          />
          <View style={hStyle.boxText}>
            <Text style={hStyle.text}>Enjoy your trip</Text>
            <Text style={hStyle.subText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('mobileValid')}>
            <ButtonHello />
          </TouchableOpacity>
          
        </View>
      </Swiper>
    </View>
  );
}

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import ButtonHello from "./ButtonHello";
import { hStyle } from "./styleHello";

export default function SliderHello({ navigation }) {
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
              Request a ride get pecked up bu a nearby community driver
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
              Huge Drivers network helps find comfortable safe and cheap ride
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
            <Text style={[hStyle.subText]}>
              Know your driver in advance and be able to view current location in real time on the map
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

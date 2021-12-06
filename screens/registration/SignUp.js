import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { rStyle } from "./styleReg";
import { Formik } from "formik";
import BtnSubmit from "./BtnSubmit";

export default function SignUp() {
  return (
    <View style={rStyle.box}>
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, values }) => (
          <View>
            <TextInput
              style={[rStyle.inputInfo, rStyle.inputName]}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Name"
            />
            <TextInput
              style={[rStyle.inputInfo, rStyle.inputPassword]}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
              value={values.password}
              placeholder="Password"
            />
            <TextInput
              style={[rStyle.inputInfo, rStyle.inputEmail]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
            />
          </View>
        )}
      </Formik>
      <View style={rStyle.infoSignUp}>
        <Text style={rStyle.textSignUp}>
          Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <BtnSubmit text="Sign Up" />
      </TouchableOpacity>
    </View>
  );
}

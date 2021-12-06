import { Formik } from "formik";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BtnSubmit from "./BtnSubmit";
import { rStyle } from "./styleReg";

export default function SignIn() {
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
          </View>
        )}
      </Formik>
      <View style={rStyle.infoSignUp}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={rStyle.textSignUp}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <BtnSubmit text="Sign Up" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

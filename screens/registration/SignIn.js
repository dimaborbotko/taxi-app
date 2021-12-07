import { Formik } from "formik";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import BtnSubmit from "./BtnSubmit";
import { rStyle } from "./styleReg";

const reviewSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, ({ min }) => `Name must be at least ${min} characters`)
    .required("Name is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default function SignIn() {
  return (
    <View style={rStyle.box}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={{ name: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          errors,
          isValid,
          touched,
        }) => (
          <View>
            <View>
              <TextInput
                name="name"
                style={[rStyle.inputInfo]}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Name"
              />
              {(errors.name && touched.name) && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.name}
                </Text>
              )}
              <TextInput
                name="password"
                style={[rStyle.inputInfo]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry={true}
                value={values.password}
                placeholder="Password"
              />
              {(errors.password && touched.password) && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View style={rStyle.infoSignUp}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={rStyle.textSignUp}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => console.log(values)}
              disabled={!isValid}
            >
              <BtnSubmit text="Sign Up" />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});

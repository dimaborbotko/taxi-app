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
import * as yup from "yup";
import BtnSubmit from "./BtnSubmit";

const reviewSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, ({ min }) => `Name must be at least ${min} characters`)
    .required("Name is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default function SignUp() {
  return (
    <View style={rStyle.box}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={{ name: "", password: "", email: "" }}
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
              <TextInput
                name="email"
                style={[rStyle.inputInfo]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
                keyboardType="email-address"
              />
              {(errors.email && touched.email) && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={rStyle.infoSignUp}>
              <Text style={rStyle.textSignUp}>
                Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={!isValid}
              onPress={() => console.log(values)}
            >
              <BtnSubmit text="Sign Up" />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

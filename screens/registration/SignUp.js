import React, { useState } from "react";
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
import { auth } from "../../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// const reviewSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(6, ({ min }) => `Name must be at least ${min} characters`)
//     .required("Name is Required"),
//   email: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),
//   password: yup
//     .string()
//     .min(8, ({ min }) => `Password must be at least ${min} characters`)
//     .required("Password is required"),
// });

export default function SignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((re) => {
        console.log(re);
      })
      .catch((re) => {
        console.log(re);
      });
  };
  return (
    <View style={rStyle.box}>
      <View>
        <View>
          <TextInput
            name="name"
            style={[rStyle.inputInfo]}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Name"
          />
          {/* {errors.name && touched.name && (
            <Text style={{ fontSize: 10, color: "red" }}>{errors.name}</Text>
          )} */}
          <TextInput
            name="password"
            style={[rStyle.inputInfo]}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            value={password}
            placeholder="Password"
          />
          {/* {errors.password && touched.password && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.password}
            </Text>
          )} */}
          <TextInput
            name="email"
            style={[rStyle.inputInfo]}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={rStyle.infoSignUp}>
          <Text style={rStyle.textSignUp}>
            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          // disabled={!isValid}
          onPress={signUpUser}
        >
          <BtnSubmit text="Sign Up" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

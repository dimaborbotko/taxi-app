import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BtnReg from "./BtnReg";
import BtnSubmit from "./BtnSubmit";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import { rStyle } from "./styleReg";
import { auth } from "../../components/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

export default function Form({ navigation }) {
  const [switchOn, setSwitchOn] = useState(0);

  const [isSignedUp, setIsSignedUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    
    setUser(currentUser)
  })

  // useEffect(async () => {
  //   await AsyncStorageLib.setItem("nameSave", name)
  // }, []);
  console.log(name)

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((re) => {
        console.log(re);
        navigation.navigate("main");
      })
      .catch((re) => {
        console.log(re);
      });
  };

  const logInUser = () => {
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((re) => {
        console.log(re);
        navigation.navigate("main");
      })
      .catch((re) => {
        console.log(re);
      });
  };


  if (switchOn === 0) {
    return (
      <View style={rStyle.container}>
        <View style={rStyle.btns}>
          <View style={rStyle.shadow}>
            <BtnReg text="Sign Up" />
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setSwitchOn(1)}>
            <BtnReg text="Sign In" />
          </TouchableOpacity>
        </View>
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

  return (
    <View style={rStyle.container}>
      <View style={rStyle.btns}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSwitchOn(0)}>
          <BtnReg text="Sign Up" />
        </TouchableOpacity>
        <View style={rStyle.shadow}>
          <BtnReg text="Sign In" />
        </View>
      </View>
      <View style={rStyle.box}>
        <View>
          <View>
            <TextInput
              name="email"
              style={[rStyle.inputInfo]}
              onChangeText={(text) => setEmailLogin(text)}
              value={emailLogin}
              placeholder="Email"
            />
            {/* {(errors.name && touched.name) && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.name}
                </Text>
              )} */}
            <TextInput
              name="password"
              style={[rStyle.inputInfo]}
              onChangeText={(text) => setPasswordLogin(text)}
              secureTextEntry={true}
              value={passwordLogin}
              placeholder="Password"
            />
            {/* {(errors.password && touched.password) && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Text>
              )} */}
          </View>
          <View style={rStyle.infoSignUp}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={rStyle.textSignUp}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => console.log(values)}
              disabled={!isValid}
            >
              <BtnSubmit text="Sign Up" />
            </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          // disabled={!isValid}
          onPress={logInUser}
        >
          <BtnSubmit text="Sign In" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

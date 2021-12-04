import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { mStyles } from "./styleMobValid";
import { Ionicons } from "@expo/vector-icons";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 5;

export default function GetCode() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (value == "11111") {
      setColor("#17cb8e");
    } else if(value !== '11111'){
        setColor('black')
    }
  }, [value]);

  console.log(value);
  

  return (
    <View style={mStyles.container}>
      <View style={[mStyles.box, mStyles.boxCode]}>
        <View>
          <Text style={mStyles.title}>Phone Verification</Text>
          <Text style={mStyles.subTitle}>Enter your code below</Text>
        </View>
        <View style={mStyles.enterCode}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Ionicons
            name="checkmark-done-circle-outline"
            size={35}
            color={color}
            style={mStyles.done}
          />
        </View>
        <View style={mStyles.againCode}>
          <Text style={mStyles.quest}>Didn`t recieve code?</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={mStyles.send}>Send again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: "center", fontSize: 30 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "qsb",
  },
});

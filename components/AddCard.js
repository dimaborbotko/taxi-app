import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddCard() {
  const [card, setCard] = useState({});
  console.log(card);
  return (
    <View style={styles.container}>
      <View style={styles.cardArea}>
        <View style={styles.boxCard}>
          <LiteCreditCardInput
            onChange={(form) =>
            [setCard({ number: form.values.number, data: form.values.expiry, valid: form.valid, status: form.status.expiry }),
            console.log(form)]
            }
          />
        </View>
      </View>

      <TouchableOpacity style={styles.btnAdd} activeOpacity={0.7}>
        <View style={styles.box}>
          <Text style={styles.text}>Add Card</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.cardList}>
        <Text style={styles.textList}>Your cards:</Text>
      </View>
      {/* {card.map((item) => {
        return (
          <View>
            <Text>{item.number}</Text>
            <Text>{item.data}</Text>
          </View>
        );
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    alignSelf: "center",
  },
  cardArea: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#fad312",
    marginBottom: 20,
    marginTop: 60,
  },
  boxCard: {
    paddingVertical: 5,
  },
  btnAdd: {
    width: "60%",
    marginBottom: 70,
  },
  box: {
    borderRadius: 20,
    backgroundColor: "#fad312",
    alignItems: "center",
  },
  text: {
    fontFamily: "qb",
    color: "#414560",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cardList: {},
  textList: {
    fontFamily: "qsb",
    fontSize: 18,
    color: "#414560",
  },
});

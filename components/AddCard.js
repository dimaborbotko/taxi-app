import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function AddCard() {
  const [card, setCard] = useState({});
  const [listCard, setListCard] = useState([1]);
  if (!listCard) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardArea}>
        <View style={styles.boxCard}>
          <LiteCreditCardInput
            onChange={(form) => [
              setCard({
                number: form.values.number,
                data: form.values.expiry,
                valid: form.valid,
                status: form.status.expiry,
              }),
            ]}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnAdd}
        activeOpacity={0.7}
        onPress={() => {
          if (listCard.length === 0) {
            setListCard(() => listCard.push(card));
          } else {
            setListCard((prev) => [...prev, card]);
          }
        }}
      >
        <View style={styles.box}>
          <Text style={styles.text}>Add Card</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.cardList}>
        <Text style={styles.textList}>Your cards:</Text>
      </View>

      {listCard.length > 0 &&
        listCard.map((item, i) => {
          console.log(item);
          if (i === 0) {
            return;
          }
          return (
            <View style={styles.myCardList}>
              <TouchableOpacity style={styles.listCards} activeOpacity={0.7}>
                <Ionicons name="card" size={32} color="#414560" />
                <Text style={styles.listText}>{`${item.number.substring(
                  0,
                  5
                )}**** **** ${item.number.substring(15)}`}</Text>
                <Text style={styles.listText}>{item.data}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
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
  listCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    paddingVertical: 7,
    borderColor: "#414560",
    borderRadius: 20,
    paddingHorizontal: 10,

    marginTop: 20,
  },
  listText: {
    fontFamily: "qsb",
    fontSize: 14,
    color: "#414560",
  },
});

import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { operation } from "../operation";
import { AntDesign } from "@expo/vector-icons";

export default function MyWallet({navigation}) {
  const [active, setActive] = useState(true);
  console.log(operation[0].money);
  return (
    <View style={styles.container}>
      <View style={styles.walletDes}>
        <View style={styles.header}>
          <Text style={styles.title}>My Wallet</Text>
          <Text style={styles.money}>66.450,30$</Text>

          <TouchableOpacity
            style={[styles.btnAdd]}
            activeOpacity={0.7}
            onPress={() => setActive(true)}
          >
            <View style={styles.walletAdd}>
              <Text style={[styles.text]}>Replenish </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cards}>
        <View style={styles.contCard}>
          <Text style={styles.text}>Add new card:</Text>
          <TouchableOpacity
            style={[styles.addCard]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('addCard')}
          >
            <View style={styles.walletCard}>
              <AntDesign name="plus" size={18} color="#414560" />
              <Text style={[styles.text, styles.cardText]}>Press to add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity
          style={[
            styles.pressBtn,
            active === false
              ? { backgroundColor: "#e8ecf5" }
              : { backgroundColor: "#fad312", elevation: 5 },
          ]}
          activeOpacity={1}
          onPress={() => setActive(true)}
        >
          <View style={styles.btnWallet}>
            <Text
              style={[
                styles.text,
                active === false ? { color: "#a6aab5" } : { color: "#414560" },
              ]}
            >
              History
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.pressBtn,
            active === true
              ? { backgroundColor: "#e8ecf5" }
              : { backgroundColor: "#fad312", elevation: 5 },
          ]}
          activeOpacity={1}
          onPress={() => setActive(false)}
        >
          <View style={styles.btnWallet}>
            <Text
              style={[
                styles.text,
                active === true ? { color: "#a6aab5" } : { color: "#414560" },
              ]}
            >
              In Progress
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.operNow}>
        {active && (
          <View>
            <View style={styles.today}>
              <View style={styles.data}>
                <Text style={styles.textOper}>today at </Text>
                <Text style={[styles.textOper, styles.timeText]}>12:30</Text>
              </View>
              <Text style={styles.textOper}>- 20$</Text>
            </View>
            <Text style={styles.approve}>Approved by</Text>
          </View>
        )}
        <ScrollView
          style={{ height: 500 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1 }}>
            {active &&
              operation.map((item) => {
                return (
                  <View style={styles.operationList}>
                    <View style={styles.itemOper}>
                      <View style={styles.data}>
                        <Text style={styles.textOper}>{item.month} at</Text>
                        <Text style={[styles.textOper, styles.timeText]}>
                          {" "}
                          {item.time}
                        </Text>
                      </View>
                      <Text style={styles.textOper}>- {item.money}$</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  walletDes: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 10,
    backgroundColor: "#e4e9ed",
    paddingHorizontal: 40,
    elevation: 6,
  },
  operNow: {
    width: "85%",
    alignSelf: "center",
  },
  header: {
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontFamily: "qb",
    fontSize: 24,
    color: "#414560",
  },
  btnAdd: {
    backgroundColor: "#fad312",
    width: "40%",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  walletAdd: {
    padding: 15,
  },
  money: {
    fontFamily: "qb",
    fontSize: 46,
    color: "#414560",
  },
  cards: {
    paddingHorizontal: 40,
    paddingBottom: 15,
    paddingTop: 18,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: -30,
    backgroundColor: '#fad312',
    elevation: 3
  },
  contCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  addCard: {
    borderWidth: 2,
    borderColor: "#414560",
    borderRadius: 20,
  },
  walletCard: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  cardText: {
    marginLeft: 5,
  },
  pressBtn: {
    borderRadius: 20,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginHorizontal: 40,
  },
  btnWallet: {
    borderRadius: 20,
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  text: {
    fontFamily: "qb",
    fontSize: 16,
    color: "#414560",
  },
  approve: {
    fontFamily: "qsb",
    fontSize: 16,
    color: "#a6aab5",
    textAlign: "center",
    marginTop: 20,
  },
  operationList: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  itemOper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  data: {
    flexDirection: "row",
  },
  textOper: {
    fontFamily: "qsb",
    fontSize: 14,
    color: "#a6aab5",
  },
  today: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    width: "90%",
    alignSelf: "center",
  },
});

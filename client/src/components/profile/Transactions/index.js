import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WalletHeader from "../WalletHeader";
import TransactionList from "./TransactionList";
import { parseDate } from "../../../utility";

export default function Transactions({ user, transactions }) {
  const { username, cash } = user;
  return (
    <View>
      <WalletHeader username={username} cash={cash} />
      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <Text
          style={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: "bold",
          }}
        >
          TRANSACTIONS
        </Text>
        <Text style={{ color: "gray", marginTop: 4 }}>
          {parseDate(Date.now())}
        </Text>
      </View>
      <TransactionList transactions={transactions} />
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { FlatList, View } from "react-native";
import TransactionItem from "../TransactionItem";

export default function TransactionList({ transactions }) {
  return (
    <View style={{ height: "100%", flexDirection: "column", marginTop: 0 }}>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => `${item.coinId}__${index}`}
        renderItem={(item, _index) => {
          return <TransactionItem item={item} />;
        }}
      />
    </View>
  );
}

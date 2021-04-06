import React from "react";
import { FlatList, View } from "react-native";
import CurrencyItem from "./CurrencyItem";
export default function CurrencyList({ markets }) {
  return (
    <View style={{ height: "100%", flexDirection: "column", marginTop: 0 }}>
      <FlatList
        data={markets}
        keyExtractor={(item) => item.id}
        renderItem={(item, _index) => (
          <CurrencyItem
            coinCount={75}
            totalBookValue={99000}
            totalMarketValue={100000}
            currency={item.item}
          />
        )}
      />
    </View>
  );
}

import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import CurrencyItem from "./CurrencyItem";
import ItemPreloader from "../../common/ItemPreloader";

export default function CurrencyList({
  markets,
  marketsLoaded,
  navigateToDetail,
}) {
  const renderPlaceholder = () => (
    <View style={{ height: "100%", flexDirection: "column", marginTop: 0 }}>
      <FlatList
        keyExtractor={(_, index) => `${index}`}
        data={[...Array(20)]}
        renderItem={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(route.name);
              }}
            >
              <ItemPreloader />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const renderData = () => (
    <View style={{ height: "100%", flexDirection: "column", marginTop: 0 }}>
      <FlatList
        data={markets}
        keyExtractor={(item) => item.id}
        renderItem={(item, _index) => {
          return (
            <CurrencyItem
              coinCount={75}
              totalBookValue={99000}
              totalMarketValue={100000}
              currency={item.item}
              item={item}
              navigateToDetail={navigateToDetail}
            />
          );
        }}
      />
    </View>
  );

  return <>{marketsLoaded ? renderData() : renderPlaceholder()}</>;
}

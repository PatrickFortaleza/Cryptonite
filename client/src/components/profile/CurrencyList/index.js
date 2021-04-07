import React from "react";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
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
        keyExtractor={(item) => item.coin}
        renderItem={(item, _index) => {
          return (
            <CurrencyItem
              coinCount={item.item.totalCoins}
              totalBookValue={item.item.totalAmount}
              totalMarketValue={item.item.totalCurrValue}
              coinName={item.item.coin}
              currency={item.item.cryptoData}
              item={item.item.cryptoData}
              navigateToDetail={navigateToDetail}
            />
          );
        }}
      />
    </View>
  );

  const renderEmpty = () => (
    <View>
      <Text style={{ color: "white", textAlign: "center" }}>
        You current do not have any holdings.
      </Text>
    </View>
  );

  return (
    <>
      {marketsLoaded && markets.length > 0
        ? renderData()
        : !markets || markets.length === 0
        ? renderEmpty()
        : renderPlaceholder()}
    </>
  );
}

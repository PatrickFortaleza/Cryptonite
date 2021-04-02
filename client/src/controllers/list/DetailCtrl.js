import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Detail from "../../components/list/Detail";

export default function DetailCtrl({
  // METHOD
  navigation,

  // Properties
  name,
  image,
  symbol,
  current_price,
  high_24h,
  low_24h,
  sparkline_in_7d,
}) {
  const showBuy = (company) => {
    navigation.navigate("Buy", company);
  };

  const showSell = (company) => {
    navigation.navigate("Sell", company);
  };

  return (
    <Detail
      // METHOD
      showBuy={showBuy}
      showSell={showSell}
      // PROPERTIES
      name={name}
      symbol={symbol}
      image={image}
      current_price={current_price}
      high_24h={high_24h}
      low_24h={low_24h}
      sparkline_in_7d={sparkline_in_7d}
    />
  );
}

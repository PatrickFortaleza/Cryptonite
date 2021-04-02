import React from "react";
import Detail from "../../components/list/Detail";

export default function DetailCtrl({
  // Properties
  crypto,
  navigation,
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
      crypto={crypto}
    />
  );
}

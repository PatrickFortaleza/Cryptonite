import React from "react";
import Detail from "../../components/list/Detail";
import { useAuth } from "../../context/AuthContext";

export default function DetailCtrl({
  // Properties
  crypto,
  navigation,
}) {
  const AuthContext = useAuth();
  const { isAuthenticated } = AuthContext;

  const showBuy = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Buy", company);
  };

  const showSell = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Sell", company);
  };

  return (
    <Detail
      // METHOD
      showBuy={showBuy}
      showSell={showSell}
      // PROPERTIES
      crypto={crypto}
      isAuthenticated={isAuthenticated}
    />
  );
}

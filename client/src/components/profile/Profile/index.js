import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WalletHeader from "../WalletHeader";
import PortfolioValue from "../PortfolioValue";
import CurrencyList from "../CurrencyList";
import LoadingPreloader from "../../common/LoadingPreloader";
import { parseDate } from "../../../utility";

export default function Profile({ user, markets }) {
  if (!user) {
    return (
      <View style={styles.container}>
        <LoadingPreloader />
      </View>
    );
  }
  const { username, cash } = user;

  return (
    <View style={styles.container}>
      <WalletHeader cash={cash} username={username} />
      <PortfolioValue value={100} />
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              textTransform: "uppercase",
              color: "white",
              fontWeight: "bold",
            }}
          >
            CURRENT HOLDINGS
          </Text>
          <Text style={{ color: "gray", marginTop: 4 }}>
            {parseDate(Date.now())}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#005dff" }}>View Transactions</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CurrencyList markets={markets} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1A1A1A",
    flexDirection: "column",
  },
});

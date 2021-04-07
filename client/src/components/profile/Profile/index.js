import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WalletHeader from "../WalletHeader";
import PortfolioValue from "../PortfolioValue";
import CurrencyList from "../CurrencyList";
import LoadingPreloader from "../../common/LoadingPreloader";
import { parseDate } from "../../../utility";

export default function Profile({
  user,
  markets,
  portfolioPositions,
  marketsLoaded,
  navigateToDetail,
  navigateToTransactions,
}) {
  if (!user || !portfolioPositions) {
    return (
      <View style={styles.container}>
        <WalletHeader cash={0} username={"Loading"} />
        <PortfolioValue value={0} />
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
            ></Text>
            <Text style={{ color: "gray", marginTop: 4 }}>
              <LoadingPreloader />
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#005dff" }}>View Transactions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const { username, cash, portfolioValue } = user;
  return (
    <View style={styles.container}>
      <WalletHeader cash={cash} username={username} />
      <PortfolioValue value={portfolioValue} />
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
        <TouchableOpacity onPress={() => navigateToTransactions()}>
          <Text style={{ color: "#005dff" }}>View Transactions</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CurrencyList
          markets={portfolioPositions}
          navigateToDetail={navigateToDetail}
          marketsLoaded={marketsLoaded}
        />
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

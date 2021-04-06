import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CoinSingle } from "../../../icons/Coin";

export default function PortfolioValue({ value }) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          ...styles.listHead,
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            marginRight: 10,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CoinSingle />
        </View>
        <View>
          <Text style={styles.subheading}>Total Market Value</Text>
          <Text style={styles.heading}>
            {`${moneyFormatter.format(value)}`}
            <Text style={{ fontSize: 10 }}> &nbsp;USD</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    width: "100%",
    paddingHorizontal: 20,
    borderColor: "#333",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  listHead: {
    paddingTop: 10,
    paddingBottom: 10,
    width: `100%`,
    borderBottomColor: "#282828",
    borderBottomWidth: 1,
  },
  heading: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 21,
  },
  subheading: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 2,
  },
});

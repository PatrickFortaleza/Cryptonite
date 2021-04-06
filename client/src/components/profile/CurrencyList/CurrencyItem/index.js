import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";

export default function CurrencyItem({
  currency,
  coinCount,
  onPress,
  totalBookValue,
  totalMarketValue,
}) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flex: 1.25,
        }}
      >
        <View style={{ marginRight: 7 }}>
          <Image source={{ uri: currency.image }} style={styles.image}></Image>
        </View>

        <View style={{ marginLeft: 10, overflow: "hidden" }}>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "white",
              fontSize: 20,
            }}
          >
            {currency.symbol}
          </Text>
          <Text style={{ ...styles.text, fontSize: 10 }}>{currency.name}</Text>
        </View>
      </View>
      <View style={{ flex: 2, textAlign: "right" }}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Holdings: </Text>
          <Text style={styles.rowData}>{coinCount} Coins</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Book Value: </Text>
          <Text style={styles.rowData}>
            {`${moneyFormatter.format(totalBookValue)}`}
          </Text>
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Market Value: </Text>
            <Text style={styles.rowData}>
              {`${moneyFormatter.format(totalMarketValue)}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#232323",
  },
  image: {
    borderRadius: 35 / 2,
    overflow: "hidden",
    width: 35,
    height: 35,
  },
  text: {
    color: "white",
    paddingRight: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 3,
  },
  rowLabel: {
    width: "100%",
    color: "gray",
    fontSize: 12,
    flex: 3,
  },
  rowData: {
    width: "100%",
    color: "white",
    fontSize: 12,
    flex: 4,
    marginLeft: 4,
  },
});

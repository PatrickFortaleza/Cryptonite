import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { parseDateISO } from "../../../../utility";

export default function TransactionItem({ item }) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.transactionHead}>
          <View>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white",
                fontSize: 17,
              }}
            >
              {item.item.coinId}
            </Text>
          </View>
          <View>
            <View
              style={
                item.item.numberOfCoins * item.item.marketValue > 0
                  ? {
                      backgroundColor: "#005dff",
                      paddingHorizontal: 15,
                      paddingVertical: 3,
                      borderRadius: 15,
                    }
                  : {
                      backgroundColor: "#1b2c49",
                      borderColor: "#3273ff",
                      paddingHorizontal: 15,
                      paddingVertical: 3,
                      borderRadius: 15,
                      borderWidth: 2,
                    }
              }
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                {item.item.numberOfCoins > 0 ? "Buy" : "Sell"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: "#333",
            borderTopWidth: 1,
            marginTop: 7,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "gray" }}>Details</Text>
          </View>
          <View>
            <Text style={{ color: "white", textAlign: "right" }}>
              {item.item.numberOfCoins.toString().replace(/-/g, "")} @{" "}
              {`${moneyFormatter.format(item.item.marketValue)}`}
            </Text>
            <Text style={{ color: "white", textAlign: "right" }}>
              <Text style={{ fontSize: 7 }}>USD &nbsp;</Text>
              {item.item.numberOfCoins * item.item.marketValue > 0
                ? `${moneyFormatter.format(
                    item.item.numberOfCoins * item.item.marketValue
                  )}`
                : `${moneyFormatter.format(
                    item.item.numberOfCoins * item.item.marketValue * -1
                  )}`}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#333",
          paddingHorizontal: 20,
          paddingVertical: 4,
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }}>
          {parseDateISO(item.item.dateOfPurchase) ||
            parseDateISO(item.item.dateOfSale)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#333",
    marginTop: 20,
  },
  transactionHead: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

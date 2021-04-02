import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SparklineCtrl from "../../../controllers/list/SparklineCtrl";

export default function CompanyItem({ coinData }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: coinData.image }} style={styles.image} />
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
            {coinData.symbol}
          </Text>
          <Text style={{ ...styles.text, fontSize: 10 }}>{coinData.name}</Text>
        </View>
      </View>

      <View style={{ ...styles.center, flexDirection: "column" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...styles.text, textAlign: "right", marginTop: 20 }}>
            USD $
            {coinData.current_price < 1
              ? coinData.current_price.toFixed(4)
              : coinData.current_price.toFixed(2)}
          </Text>
        </View>
        <View style={{ width: 100, flex: 2 }}>
          <SparklineCtrl
            sparkLine={coinData.sparkline_in_7d.price}
            hasFill={false}
            height={25}
            width={100}
          />
        </View>
      </View>

      <View style={styles.right}>
        <Text style={{ ...styles.text, color: "green" }}>
          $
          {coinData.high_24h < 1
            ? coinData.high_24h.toFixed(4)
            : coinData.high_24h.toFixed(2)}
        </Text>
        <Text style={{ ...styles.text, color: "red" }}>
          $
          {coinData.low_24h < 1
            ? coinData.low_24h.toFixed(4)
            : coinData.low_24h.toFixed(2)}
        </Text>
        <Text style={{ ...styles.text, color: "grey", fontSize: 10 }}>
          24H HI/LO
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "space-between",
    height: 125,
    borderBottomWidth: 1,
    borderColor: "#333",
  },
  left: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    paddingLeft: 0,
  },
  imageContainer: {
    width: 75,
    height: 75,
    padding: 10,
  },
  center: {
    width: 150,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    flex: 1,
    borderRadius: 75 / 2,
    overflow: "hidden",
  },
  text: {
    color: "white",
    paddingRight: 10,
  },
});

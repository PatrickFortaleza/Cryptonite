import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  View,
  Switch,
} from "react-native";
import InteractiveGraphCtrl from "../../../controllers/list/InteractiveGraphCtrl";
import { formatPrice, roundLogic } from "../../../utility";
import { ArrowUp, ArrowDown } from "../../../icons/Arrows";

export default function CompanyDetail({
  //METHOD
  showBuy,
  showSell,
  toggleSwitch,
  // PROPERTIES
  crypto,
  isAuthenticated,
  isWatchList
}) {
  const { price_change_percentage_24h, price_change_24h } = crypto;
  return (
    <ScrollView style={{ ...styles.container, flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ ...styles.listHead, flex: 1 }}>
          <Text style={styles.heading}>{crypto.name}</Text>
          <Text style={styles.subheading}>
            {crypto.symbol.toUpperCase()}&nbsp;&nbsp;| &nbsp;Trade&nbsp;
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", paddingTop: 5 }}>
          <View style={{ ...styles.imageContainer }}>
            <Image source={{ uri: crypto.image }} style={styles.image} />
          </View>
        </View>
      </View>
      <View>
        <InteractiveGraphCtrl sparkline={crypto.sparkline_in_7d} />
      </View>
      <View style={{ marginTop: 50, paddingHorizontal: 10 }}>
        <Text style={{ ...styles.heading, fontSize: 40 }}>
          ${formatPrice(crypto.current_price)}{" "}
          <Text style={styles.subheading}>&nbsp;USD&nbsp;</Text>
        </Text>
        <Text style={styles.subheading}>Real-Time Price</Text>
        <Text style={{ marginTop: 10 }}>
          <Text
            style={
              price_change_percentage_24h > 0
                ? { color: "green", fontSize: 23 }
                : { color: "red", fontSize: 23 }
            }
          >
            {price_change_percentage_24h > 0 ? <ArrowUp /> : <ArrowDown />}
            &nbsp;
            {roundLogic(price_change_percentage_24h)}
            <Text style={{ fontSize: 15 }}>%</Text>
          </Text>
          <Text
            style={
              price_change_percentage_24h > 0
                ? { color: "green", fontSize: 23 }
                : { color: "red", fontSize: 23 }
            }
          >
            &nbsp; &nbsp;
            <Text style={{ fontSize: 15 }}>$</Text>
            {roundLogic(price_change_24h)}
          </Text>
        </Text>
        <Text style={styles.subheading}>24h Change</Text>
      </View>
      <View style={styles.pairItem}>
        <Text style={styles.headingWatchList}>Watchlist</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isWatchList ? "#007AFF" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isWatchList}
          style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#232323",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#353535",
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginTop: 5,
        }}
      >
        <Text style={styles.heading}>Key Statistics</Text>
      </View>

      <View style={{ ...styles.dayRange }}>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 3,
            marginHorizontal: 30,
            marginBottom: 10,
            marginTop:10,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "white", flex: 1, textAlign: "left" }}>
            ${roundLogic(crypto.low_24h)} Lo
          </Text>
          <Text
            style={{
              color: "white",
              flex: 1,
              textAlign: "center",
              color: "gray",
              fontSize: 12,
            }}
          >
            Day Range
          </Text>
          <Text style={{ color: "white", flex: 1, textAlign: "right" }}>
            ${roundLogic(crypto.high_24h)} Hi
          </Text>
        </View>
      </View>

      <View style={styles.stat}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ ...styles.statLabel, color: "white", fontWeight: "bold" }}
          >
            Market Capitalization
          </Text>
          <Text style={{ ...styles.statLabel, color: "white" }}>
            ${roundLogic(crypto.market_cap)}
          </Text>
        </View>
      </View>

      <View style={styles.stat}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ ...styles.statLabel, color: "white", fontWeight: "bold" }}
          >
            Circulating Supply
          </Text>
          <Text style={{ ...styles.statLabel, color: "white" }}>
            {roundLogic(crypto.circulating_supply)}
          </Text>
        </View>
      </View>

      <View style={styles.stat}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ ...styles.statLabel, color: "white", fontWeight: "bold" }}
          >
            Total Supply
          </Text>
          <Text style={{ ...styles.statLabel, color: "white" }}>
            {roundLogic(crypto.max_supply)}
          </Text>
        </View>
      </View>

      {isAuthenticated ? (
        <View
          style={{ flexDirection: "row", marginTop: 20, paddingHorizontal: 10 }}
        >
          <TouchableOpacity
            style={{ ...styles.buy, flex: 1, marginRight: 10 }}
            onPress={() => showBuy(crypto)}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Buy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.sell, flex: 1 }}
            onPress={() => {
              showSell(crypto);
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Sell
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    height: "100%",
  },
  imageContainer: {
    width: 75,
    height: 75,
    padding: 10,
  },
  image: {
    flex: 1,
    borderRadius: 75 / 2,
    overflow: "hidden",
  },
  stats: {
    fontSize: 25,
    color: "white",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  pairItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  items: {
    color: "white",
    fontSize: 18,
  },
  listHead: {
    paddingTop: 20,
    paddingBottom: 20,
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomColor: "#282828",
    borderBottomWidth: 1,
  },
  heading: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 21,
  },
  headingWatchList: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
  subheading: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 7,
  },
  dayRange: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  stat: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: -1,
    borderColor: "#333",
  },
  sell: {
    backgroundColor: "#1b2c49",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#3273ff",
  },
  buy: {
    backgroundColor: "#3273ff",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
  },
});

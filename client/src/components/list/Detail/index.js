import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import InteractiveGraphCtrl from "../../../controllers/list/InteractiveGraphCtrl";

export default function CompanyDetail({
  //METHOD
  showBuy,
  showSell,
  // PROPERTIES
  name,
  symbol,
  image,
  current_price,
  high_24h,
  low_24h,
  sparkline_in_7d,
}) {
  //pass the object to the buy page through route
  let item = {
    name: name,
    image: image,
    current_price: current_price,
    high_24h: high_24h,
    low_24h: low_24h,
  };

  return (
    <View data={item} style={{ ...styles.container, flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ ...styles.listHead, flex: 1 }}>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.subheading}>
            {symbol.toUpperCase()}&nbsp;&nbsp;| &nbsp;Trade&nbsp;
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", paddingTop: 5 }}>
          <View style={{ ...styles.imageContainer }}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </View>
      </View>
      <View>
        <InteractiveGraphCtrl sparkline={sparkline_in_7d} />
      </View>
      {/* <Image source={{ uri: image }} style={styles.image} /> */}
      <View style={{ marginTop: 50, paddingHorizontal: 10 }}>
        <Text style={{ ...styles.heading, fontSize: 40 }}>
          ${current_price}{" "}
          <Text style={styles.subheading}>&nbsp;USD&nbsp;</Text>
        </Text>
        <Text style={styles.subheading}>Real-Time Price</Text>
      </View>

      {/* <View style={styles.trade}>
        <TouchableOpacity onPress={() => showBuy(item)}>
          <Text style={styles.buy}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            showSell(item);
          }}
        >
          <Text style={styles.sell}>Sell</Text>
        </TouchableOpacity>
      </View> */}

      {/* <View>
        <Text style={styles.stats}>Stats</Text>
        <View style={styles.pairItem}>
          <Text style={styles.items}>Market Cap</Text>
          <Text style={styles.items}>{current_price}</Text>
        </View>

        <View style={styles.pairItem}>
          <Text style={styles.items}>High in 24hours</Text>
          <Text style={styles.items}>{high_24h}</Text>
        </View>

        <View style={styles.pairItem}>
          <Text style={styles.items}>Low in 24hours</Text>
          <Text style={styles.items}>{low_24h}</Text>
        </View>
      </View> */}
    </View>
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
  price: {
    fontSize: 50,
    color: "white",
  },
  initials: {
    fontSize: 25,
    color: "white",
  },
  trade: {
    paddingTop: 75,
    paddingBottom: 75,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buy: {
    color: "#841584",
    fontSize: 50,
    color: "white",
  },
  sell: {
    color: "#841584",
    fontSize: 50,
    color: "white",
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
    paddingBottom: 10,
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
  subheading: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 7,
  },
});

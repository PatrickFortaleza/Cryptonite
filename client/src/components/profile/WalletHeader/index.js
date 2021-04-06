import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserProfile } from "../../../icons/User";
import { CoinsDefault } from "../../../icons/Coin";

export default function WalletHeader({ cash, username }) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ ...styles.listHead, flexDirection: "row", flex: 2 }}>
        <View style={{ marginRight: 10 }}>
          <UserProfile />
        </View>
        <View>
          <Text style={styles.heading}>{username}</Text>
          <Text style={styles.subheading}>Portfolio</Text>
        </View>
      </View>
      <View style={{ ...styles.listHead, flexDirection: "row", flex: 1.25 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            marginRight: 7,
          }}
        >
          <CoinsDefault />
        </View>
        <View>
          <Text style={{ ...styles.subheading, textAlign: "left" }}>
            Wallet:
          </Text>
          <Text style={{ ...styles.heading, fontSize: 14 }}>
            {`${moneyFormatter.format(cash)}`}
            <Text style={{ fontSize: 7 }}> &nbsp;USD</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 2,
  },
});

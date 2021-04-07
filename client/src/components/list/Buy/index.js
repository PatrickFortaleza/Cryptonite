import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import { formatPrice } from "../../../utility";

export default function Buy({
  //METHODS
  setQuantity,
  submitForm,
  //PROPERTIES
  crypto,
  bookValue,
  user,
  portfolioStats,
}) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ ...styles.listHead, flex: 1 }}>
            <Text style={styles.heading}>{crypto.name}</Text>
            <Text style={styles.subheading}>
              {crypto.symbol.toUpperCase()}&nbsp;&nbsp;| &nbsp;BUY&nbsp;
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", paddingTop: 5 }}>
            <View style={{ ...styles.imageContainer }}>
              <Image source={{ uri: crypto.image }} style={styles.image} />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.pair}>
            <Text style={styles.quantity}>Quantity</Text>
            <TextInput
              onChangeText={(number) => {
                setQuantity(+number);
              }}
              placeholderTextColor={"grey"}
              placeholder="Enter Quantity"
              style={styles.quantity}
            />
          </View>

          <View style={styles.pair}>
            <Text style={styles.marketPrice}>Market Price </Text>
            <Text style={styles.marketPrice}>
              $ {formatPrice(crypto.current_price.toFixed(2))}
            </Text>
          </View>

          <View style={styles.pair}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>
              $ {formatPrice(bookValue.toFixed(2))}
            </Text>
          </View>
        </View>

        <View style={{ ...styles.userStats, marginTop: 7 }}>
          <Text style={styles.stats}>Available Cash</Text>
          <Text style={styles.stats}>
            {!user.profileData.cash
              ? "$0.00"
              : `${moneyFormatter.format(user.profileData.cash)}`}{" "}
            USD
          </Text>
        </View>

        {portfolioStats !== undefined &&
        Object.keys(portfolioStats).length > 0 ? (
          <>
            <View style={styles.containerBottom}>
              <View
                style={{
                  ...styles.userStats,
                  borderTopWidth: 1,
                  borderBottomWidth: 2,
                  borderColor: "#333",
                  paddingTop: 10,
                  marginBottom: 10,
                  backgroundColor: "#232323",
                }}
              >
                <Text style={styles.statsHeader}>CURRENT HOLDINGS</Text>
              </View>

              <View style={styles.userStats}>
                <Text style={styles.stats}>Position</Text>
                <Text style={styles.stats}>
                  {portfolioStats.totalCoins} Coin(s)
                </Text>
              </View>

              <View style={styles.userStats}>
                <Text style={styles.stats}>Book Value Per Coin</Text>
                <Text style={styles.stats}>
                  {" "}
                  {`${moneyFormatter.format(portfolioStats.averagePrice)}`} USD
                </Text>
              </View>

              <View style={styles.userStats}>
                <Text style={styles.stats}>Total Book Value</Text>
                <Text style={styles.stats}>
                  {`${moneyFormatter.format(portfolioStats.totalAmount)}`} USD
                </Text>
              </View>

              <View style={styles.userStats}>
                <Text style={styles.stats}>Total Market Value</Text>
                <Text style={styles.stats}>
                  {`${moneyFormatter.format(portfolioStats.totalCurrValue)}`}{" "}
                  USD
                </Text>
              </View>
            </View>
          </>
        ) : null}

        <View style={styles.buttonBottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              submitForm(crypto);
            }}
          >
            <Text
              style={{
                ...styles.buttonText,
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              BUY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    height: "100%",
  },
  containerBottom: {
    paddingVertical: 40,
  },
  box: {
    borderWidth: 1,
    borderColor: "#3273ff",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  main: {
    height: "100%",
  },
  header: {
    fontSize: 35,
    color: "white",
  },
  quantity: {
    textAlign: "right",
    fontSize: 20,
    color: "white",
  },
  marketPrice: {
    fontSize: 20,
    color: "white",
  },
  userStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  statsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  stats: {
    fontSize: 17,
    color: "white",
  },
  total: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 15,
  },
  pair: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  amount: {
    flexDirection: "row",
  },
  buttonBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 20,
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: "#0079ff",
    marginTop: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
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
});

import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import { formatPrice} from "../../../utility"

export default function Buy({
  //METHODS
  setQuantity,
  //setMarketPrice,
  //setBookValue,
  submitForm,
  //PROPERTIES
  crypto,
  bookValue,


}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Image source={{ uri: crypto.image }} style={styles.image} />
          <Text style={styles.header}>{crypto.name}</Text>
        </View>

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
          <Text style={styles.marketPrice}>$ {formatPrice((crypto.current_price).toFixed(2))}</Text>
        </View>

        <View style={styles.pair}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>$  {formatPrice(bookValue.toFixed(2))}</Text>
        </View>

        <View style={styles.buttonBottom}> 
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              submitForm(crypto);
            }}
          >
            <Text style={styles.buttonText}>BUY</Text>
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
    textAlign : "right",
    fontSize: 20,
    color: "white",
    //backgroundColor: ""
  },
  marketPrice: {
    fontSize: 20,
    color: "white",
  },
  total: {
    fontSize: 25,
    color: "white",
    paddingBottom: 40,
  },
  pair: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  amount: {
    flexDirection: "row",
  },
  buttonBottom : {
    position: "absolute",
    bottom : 0,
    width : "100%",
    paddingBottom : 20 
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
  image: {
    height: 50,
    width: 50,
  },
});
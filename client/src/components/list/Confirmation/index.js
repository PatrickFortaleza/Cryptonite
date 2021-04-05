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

export default function Confirmation({
  //METHODS
  //PROPERTIES
  transaction,
  navigation
  
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Transaction Complete!</Text>
      <Text style={styles.summary}>Summary</Text>

      <View style={styles.pair}>
        <Text style={styles.quantity}>Quantity </Text>
        <Text style={styles.quantity}>{transaction.quantity}</Text>
      </View>

      <View style={styles.pair}>
        <Text style={styles.marketPrice}>Market Price </Text>
        <Text style={styles.marketPrice}> $ { formatPrice(transaction.company.current_price.toFixed(2))}</Text>
      </View>

      <View style={styles.pair}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>$ {formatPrice(transaction.bookValue.toFixed(2))}</Text>
      </View>

      <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Index");
            }}
          >
            <Text style={styles.buttonText}>Back to Index</Text>
          </TouchableOpacity>
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
    textAlign : "center",
    color: "white",
    
   
    paddingTop : 35 ,
    paddingBottom: 35
  },
  summary: {
    fontSize: 25,
    color: "white",
    padding: 20,
    paddingTop : 0,
    paddingBottom : 0 
  },
  quantity: {
    fontSize: 18,
    color: "white",
  },
  marketPrice: {
    fontSize: 18,
    color: "white",
  },
  total: {
    fontSize: 25,
    color: "white",
    paddingBottom: 40,
    paddingTop: 40
  },
  pair: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop : 0,
    paddingBottom : 0 
  },
  amount: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#0079ff",
    marginTop: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    textAlign : "center"
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },

  bottom:{
    position : "absolute",
    bottom : 0,
    paddingBottom: 20,
    width : "100%",
    paddingHorizontal : 50
    
  },
});
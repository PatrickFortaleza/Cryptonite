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

export default function Sell({
    //METHODS
      setQuantity, 
      submitForm, 
    //PROPERTIES
      crypto,
      bookValue,
      user
  }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Image source={{ uri: crypto.image }} style={styles.image} />
          <Text style={styles.header}>{crypto.name}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.pair}>
            <Text style={styles.quantity}>Quantity</Text>
            <TextInput
              onChangeText={(number) => {
                setQuantity(+number)
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

          <View style = {styles.pair}>
            <Text style = {styles.total}>Total</Text>
            <Text style={styles.total}>$  {formatPrice(bookValue.toFixed(2))}</Text>
          </View>
        </View>
       
        <View style={styles.containerBottom}>
        <View style={styles.userStats}>
          <Text style={styles.statsHeader}>Key Stats</Text>
        </View>

        <View style={styles.userStats}>
          <Text style={styles.stats}>User</Text>
          <Text style={styles.stats}>{user.userData.username}</Text>
        </View>

        <View style={styles.userStats}>
          <Text style={styles.stats}>Number of Coins</Text>
          <Text style={styles.stats}>TBA</Text>
          {/* <Text style={styles.stats}>{!object.numberOfCoins ? "n/a" : object.numberOfCoins}</Text> */}
        </View>

        
        <View style={styles.userStats}>
            <Text style={styles.stats}>Wallet</Text>
            <Text style={styles.stats}>{!user.profileData.cash ? "0.00" : formatPrice(user.profileData.cash.toFixed(2))}</Text>
          </View>

        <View style={styles.userStats}>
          <Text style={styles.stats}>Portfolio BookValue</Text>
          <Text style={styles.stats}>{formatPrice(user.profileData.bookValue.toFixed(2))}</Text>
        </View>

        </View>
        



        <View style = {styles.buttonBottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              submitForm(crypto)
            }}
          >
            <Text style={styles.buttonText}>SELL</Text>
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
    paddingVertical : 40,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  box : {
    borderWidth : 1,
    borderColor : "#3273ff"
  },
  main: {
    height: "100%",
  },
  header: {
    fontSize: 35,
    color: "white",
  },
  quantity: {
    fontSize: 20,
    color: "white",
    textAlign : "right",
  },
  marketPrice: {
    fontSize: 20,
    color: "white",
  },
  total: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 20,
  },
  pair: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  amount: {
    flexDirection: "row",
  },
  userStats:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal : 20,
    paddingBottom: 10
  },
  statsHeader: {
    fontSize: 20,
    fontWeight : "bold",
    color: "white",
  },

  stats: {
    fontSize: 17,
    color: "white",
  },
  buttonBottom : {
    position: "absolute",
    bottom : 0,
    width : "100%",
    paddingBottom : 20, 
    paddingHorizontal: 50
  },
  button: {
    backgroundColor: "#0079ff",
    marginTop: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#1b2c49",
   
    borderWidth: 2,
    borderColor: "#3273ff",
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

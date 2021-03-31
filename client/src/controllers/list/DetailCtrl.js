import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Detail from "../../components/list/Detail"

export default function DetailCtrl({
  // METHOD
  navigation,

  // Properties
  name, image, 
  current_price,
  high_24h, 
  low_24h
}) {

  const showBuy = async () => {
    navigation.navigate("Buy")
  } 

  const showSell = async () => {
    navigation.navigate("Sell")
  } 



  return (
    <Detail 
      // METHOD
      showBuy = {showBuy}
      showSell = {showSell}
      // PROPERTIES
      name = {name}
      image = {image}
      current_price = {current_price}
      high_24h = {high_24h}
      low_24h = {low_24h}
    />
  );
}
 
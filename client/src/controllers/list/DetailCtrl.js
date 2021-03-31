import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Detail from "../../components/list/Detail"

export default function DetailCtrl({
  name, image, current_price,
  high_24h, low_24h
}) {

  return (
    <Detail 
      // PROPERTIES
      name = {name}
      image = {image}
      current_price = {current_price}
      high_24h = {high_24h}
      low_24h = {low_24h}
    />
  );
}
 
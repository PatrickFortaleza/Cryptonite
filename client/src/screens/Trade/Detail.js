import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailCtrl from '../../controllers/list/DetailCtrl';

export default function DetailScreen({ route }) {

  const{
    name, current_price, image, 
    high_24h, low_24h
  } = route.params

  return (
    <View>
      <DetailCtrl 
        // PROPERTIES
        name = {name}
        image = {image}
        current_price = {current_price}
        high_24h = {high_24h}
        low_24h = {low_24h}
        />
    </View>
  );
}

const styles = StyleSheet.create({});






  
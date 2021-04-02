import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailCtrl from '../../controllers/list/DetailCtrl';

export default function DetailScreen({ route , navigation}) {

  const{ name, current_price, image, 
         high_24h, low_24h, id
  } = route.params

  return (
    <View>
      <DetailCtrl 
        // METHOD
       
        // PROPERTIES
        id = {id}
        name = {name}
        image = {image}
        current_price = {current_price}
        high_24h = {high_24h}
        low_24h = {low_24h}
        navigation = {navigation}
        />
    </View>
  );
}

const styles = StyleSheet.create({});






  
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SellCtrl from "../../controllers/list/SellCtrl"

export default function Sell({ route, navigation }) {

  let prop = route.params
  console.log("Sell", route.params)
  console.log("Test", prop)
  return (
    <View>
       <SellCtrl prop = {prop}/>
    </View>
  );
}

const styles = StyleSheet.create({});

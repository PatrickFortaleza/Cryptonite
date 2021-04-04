import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SellCtrl from "../../controllers/list/SellCtrl"

export default function Sell({ route, navigation }) {
  const prop = route.params

  return (
    <View>
       <SellCtrl 
       // PROPERTIES
       prop = {prop}
       navigation = {navigation}
       />
    </View>
  );
}

const styles = StyleSheet.create({});

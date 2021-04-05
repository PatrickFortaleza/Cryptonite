import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SellCtrl from "../../controllers/list/SellCtrl"

export default function Sell({ route, navigation }) {
  const crypto = route.params
  return (
    <View>
       <SellCtrl 
       // PROPERTIES
       crypto = {crypto}
       navigation = {navigation}
       />
    </View>
  );
}

const styles = StyleSheet.create({});

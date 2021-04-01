import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SellCtrl from "../../controllers/list/SellCtrl"

export default function Sell({ navigation }) {
  return (
    <View>
       <SellCtrl navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({});

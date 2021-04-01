import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BuyCtrl from "../../controllers/list/BuyCtrl"

export default function Buy({ route, navigation }) {

  let prop = route.params
  console.log("Buy", route.params)
  console.log("Test", prop)
  

  return (
    <View>
      <BuyCtrl prop = {prop}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

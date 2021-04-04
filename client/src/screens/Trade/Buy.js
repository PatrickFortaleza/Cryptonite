import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BuyCtrl from "../../controllers/list/BuyCtrl"

export default function Buy({ route, navigation }) {
  let prop = route.params

  return (
    <View>
      <BuyCtrl 
      // Properties
      prop = {prop}
      navigation = {navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

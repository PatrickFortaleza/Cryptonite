import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BuyCtrl from "../../controllers/list/BuyCtrl"

export default function Buy({ route, navigation }) {
  let crypto = route.params

  return (
    <View>
      <BuyCtrl 
      // Properties
      crypto = {crypto}
      navigation = {navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

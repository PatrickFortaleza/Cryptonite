import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BuyCtrl from "../../controllers/list/BuyCtrl"

export default function Buy({ navigation }) {
  return (
    <View>
      <BuyCtrl navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({});

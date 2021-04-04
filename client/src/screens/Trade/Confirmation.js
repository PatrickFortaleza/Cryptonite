import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfirmationCtrl from "../../controllers/list/ConfirmationCtrl"

export default function Confirmation({route}) {
  let crypto = route.params
  console.log("Confirmation ", crypto)

  return (
    <View>
      <ConfirmationCtrl/>
    </View>
  );
}

const styles = StyleSheet.create({});

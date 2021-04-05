import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfirmationCtrl from "../../controllers/list/ConfirmationCtrl"

export default function Confirmation({route, navigation}) {
  const transaction = route.params
  
  return (
    <View>
      <ConfirmationCtrl
        //PROPERTIES
        transaction = {transaction}
        navigation = {navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

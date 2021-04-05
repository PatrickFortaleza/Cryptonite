import React from "react"
import { StyleSheet, Text, View } from "react-native";
import Confirmation from "../../components/list/Confirmation"

export default function ConfirmationCtrl({
  // PROPERTIES
  transaction,
  navigation,
  user
}){

  return (
      <Confirmation
        //PROPERTIES
        transaction = {transaction}
        navigation = {navigation}
        user = {user}
      />
  )
}
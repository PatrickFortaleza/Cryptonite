import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BuyCtrl from "../../controllers/list/BuyCtrl";
import { useAuth } from "../../context/AuthContext";

export default function Buy({ route, navigation }) {
  let crypto = route.params
  const user = useAuth();

  return (
    <View>
      <BuyCtrl 
      // Properties
      crypto = {crypto}
      navigation = {navigation}
      user = {user}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

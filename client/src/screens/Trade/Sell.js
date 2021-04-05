import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SellCtrl from "../../controllers/list/SellCtrl";
import { useAuth } from "../../context/AuthContext";

export default function Sell({ route, navigation }) {
  const crypto = route.params
  const user = useAuth();
  
  return (
    <View>
       <SellCtrl 
       // PROPERTIES
       crypto = {crypto}
       navigation = {navigation}
       user = {user}
       />
    </View>
  );
}

const styles = StyleSheet.create({});

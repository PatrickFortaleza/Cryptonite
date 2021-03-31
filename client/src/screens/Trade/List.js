import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCtrl from "../../controllers/list/ListCtrl"

export default function List({ navigation }) {
  return (
    <View>
      <ListCtrl navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({});
 
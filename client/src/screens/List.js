import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCtrl from "../controllers/list/ListCtrl"

export default function List() {
  return (
    <View>
       {/* <Text>List</Text> */}
      <ListCtrl/>
    </View>
  );
}

const styles = StyleSheet.create({});

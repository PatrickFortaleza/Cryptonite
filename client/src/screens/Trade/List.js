import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCtrl from "../../controllers/list/ListCtrl";
import SearchButtonCtrl from "../../controllers/search/SearchButtonCtrl";

export default function List({ navigation }) {
  return (
    <View>
      <SearchButtonCtrl navigation={navigation} />
      <ListCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

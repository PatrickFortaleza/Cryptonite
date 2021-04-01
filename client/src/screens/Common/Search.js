import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchResultsCtrl from "../../controllers/search/SearchResultsCtrl";

export default function Search({ navigation }) {
  return (
    <View>
      <SearchResultsCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

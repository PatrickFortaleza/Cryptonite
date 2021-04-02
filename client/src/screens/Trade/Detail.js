import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailCtrl from "../../controllers/list/DetailCtrl";

export default function DetailScreen({ route, navigation }) {
  const crypto = route.params;

  return (
    <View>
      <DetailCtrl
        // PROPERTIES
        crypto={crypto}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailCtrl from "../../controllers/list/DetailCtrl";

export default function DetailScreen({ route, navigation }) {
  let crypto = route.params;

  if (Object.keys(crypto).length < 3) crypto = route.params.crypto.item;

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

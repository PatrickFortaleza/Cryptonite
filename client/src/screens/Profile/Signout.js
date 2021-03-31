import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignoutCtrl from "../../controllers/auth/SignoutCtrl";

export default function Signout({ navigation }) {
  return (
    <View>
      <SignoutCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

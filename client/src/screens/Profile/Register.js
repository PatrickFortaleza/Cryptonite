import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterFormCtrl from "../../controllers/auth/RegisterFormCtrl.js";

export default function Register({ navigation }) {
  return (
    <View>
      <RegisterFormCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

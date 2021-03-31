import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginFormCtrl from "../../controllers/auth/LoginFormCtrl";

export default function Login({ navigation }) {
  return (
    <View>
      <LoginFormCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

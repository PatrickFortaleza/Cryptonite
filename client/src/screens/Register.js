import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterFormCtrl from "../controllers/auth/RegisterFormCtrl.js";

export default function Register() {
  return (
    <View>
      <Text>Register</Text>
      <RegisterFormCtrl />
    </View>
  );
}

const styles = StyleSheet.create({});

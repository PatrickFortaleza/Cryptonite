import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginFormCtrl from "../controllers/auth/LoginFormCtrl";

export default function Login() {
  return (
    <View>
      <LoginFormCtrl />
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <View>
      <Text>Register</Text>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({});

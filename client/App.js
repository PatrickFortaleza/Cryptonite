import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./src/screens/Login.js";
import Register from "./src/screens/Register.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Register />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

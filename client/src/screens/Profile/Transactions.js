import React, { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import TransactionsCtrl from "../../controllers/profile/TransactionsCtrl";

export default function Signout({ navigation }) {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#1a1a1a" }}>
      <TransactionsCtrl />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

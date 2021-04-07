import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileCtrl from "../../controllers/profile/ProfileCtrl";

export default function Profile({ navigation }) {
  return (
    <View>
      <ProfileCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

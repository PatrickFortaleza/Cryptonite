import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SearchDefault } from "../../../icons/Search";

export default function SearchButton({ navigateToSearch }) {
  return (
    <View style={style.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigateToSearch()}
          style={{ ...style.button, flexDirection: "row", padding: 3 }}
        >
          <SearchDefault style={{ flex: 1 }} />
          <Text
            style={{ color: "white", flex: 1, marginLeft: 10, lineHeight: 24 }}
          >
            Search by symbol or coin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#333",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#333",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

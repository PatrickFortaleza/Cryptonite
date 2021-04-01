import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SearchDefault } from "../../../icons/Search";

export default function SearchInput({ searchQuery, setSearchQuery }) {
  return (
    <View style={style.container}>
      <View>
        <View style={{ ...style.button, flexDirection: "row", padding: 3 }}>
          <SearchDefault style={{ flex: 1 }} />
          <TextInput
            onChangeText={(text) => setSearchQuery(text)}
            placeholderTextColor={"grey"}
            placeholder="Enter cryptocurrency symbol or name"
            style={style.input}
            autoFocus={true}
            value={searchQuery}
            autoCapitalize="none"
          />
        </View>
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
  input: {
    width: "100%",
    color: "white",
    borderWidth: 1,
    borderColor: "#333",
    paddingHorizontal: 10,
    borderRadius: 20,
    flex: 1,
  },
});

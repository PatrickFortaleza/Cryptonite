import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import CompanyItemCtrl from "../../../controllers/list/CompanyItemCtrl";

export default function List({
  //METHODS
  showDetail,
  //PROPERTIES
  cryptoData,
}) {
  return (
    <FlatList
      style={styles.flatList}
      keyExtractor={(company) => company.id}
      data={cryptoData}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              showDetail(item);
            }}
          >
            <CompanyItemCtrl coinData={item} />
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "#1a1a1a",
  },
});

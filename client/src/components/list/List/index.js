import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CompanyItemCtrl from "../../../controllers/list/CompanyItemCtrl";
import ItemPreloader from "../../common/ItemPreloader";
import { useRoute } from "@react-navigation/native";

export default function List({
  //METHODS
  showDetail,
  //PROPERTIES
  cryptoData,
  listLoaded,
}) {
  const route = useRoute();
  const renderPlaceholder = () => {
    return (
      <FlatList
        style={styles.flatList}
        keyExtractor={(_, index) => `${index}`}
        data={[...Array(20)]}
        renderItem={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(route.name);
              }}
            >
              <ItemPreloader />
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderData = () => {
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
  };
  return (
    <>
      {listLoaded || route.name === "Search"
        ? renderData()
        : renderPlaceholder()}
    </>
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
    height: "100%",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchInputCtrl from "../../../controllers/search/SearchInputCtrl";
import List from "../../list/List";

export default function SearchResults({
  searchQuery,
  setSearchQuery,
  showDetail,
  filteredData,
}) {
  return (
    <View>
      <SearchInputCtrl
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={style.results}>
        <View style={style.listHead}>
          <Text style={style.heading}>Search Query</Text>
          <Text style={style.subheading}>
            Results | &nbsp;{filteredData.length} symbols&nbsp;
          </Text>
        </View>
        <List showDetail={showDetail} cryptoData={filteredData} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  results: {
    backgroundColor: "#191919",
    height: "100%",
  },
  listHead: {
    paddingTop: 20,
    paddingBottom: 20,
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomColor: "#282828",
    borderBottomWidth: 1,
  },
  heading: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 21,
  },
  subheading: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 7,
  },
});

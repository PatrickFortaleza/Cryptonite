import React from "react";
import SearchButton from "../../components/search/SearchButton";

export default function SearchButtonCtrl({ navigation }) {
  const navigateToSearch = () => {
    navigation.navigate("Search");
  };

  return <SearchButton navigateToSearch={navigateToSearch} />;
}

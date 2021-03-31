import React from "react";
import List from "../../components/list/List"
import {Text} from "react-native";

export default function ListCtrl() {

  const showDetail = (company) => {
    navigation.navigate('CryptoDetail', company)
  } 

  return (
    <List
      // METHODS
      showDetail={showDetail}
      // PROPERTIES
    />

    // <Text>ListCtrl</Text>
  );
}

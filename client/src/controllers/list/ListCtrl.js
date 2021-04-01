import React, { useState, useEffect } from "react";
import List from "../../components/list/List";
import { getMarkets } from "../../network";

export default function ListCtrl({ navigation }) {
  const [cryptoData_, setCryptoData] = useState([]);

  const showDetail = (company) => {
    console.log(company)
     navigation.navigate("CryptoDetail", company);
  };

  const queryMarkets = async () => {
    const result = await getMarkets();
    if (!result || result.error) return setCryptoData([]);
    setCryptoData(result);
  };

  useEffect(() => {
    queryMarkets();
  }, []);

  return (
    <List
      // METHODS
      showDetail={showDetail}
      // PROPERTIES
      cryptoData={cryptoData_}
    />
  );
}

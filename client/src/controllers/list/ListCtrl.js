import React, { useState, useEffect } from "react";
import List from "../../components/list/List";
import { getMarkets } from "../../network";
import useInterval from "../../hooks/useInterval";

export default function ListCtrl({ navigation }) {
  const [cryptoData_, setCryptoData] = useState([]);
  const [listLoaded, setListLoaded] = useState(false);

  const showDetail = (company) => {
    navigation.navigate("CryptoDetail", company);
  };

  const queryMarkets = async () => {
    const result = await getMarkets();
    if (!result || result.error) return setCryptoData([]);
    await setCryptoData(result);
  };

  const evaluateListLoaded = () => {
    if (cryptoData_.length > 0) setListLoaded(true);
  };

  useEffect(() => {
    queryMarkets();
    evaluateListLoaded();
  }, []);

  // Query markets every 10 minutes.
  useInterval(() => {
    queryMarkets();
  }, 60000);

  useEffect(() => {
    evaluateListLoaded();
  }, [cryptoData_]);

  return (
    <List
      // METHODS
      showDetail={showDetail}
      // PROPERTIES
      listLoaded={listLoaded}
      cryptoData={cryptoData_}
    />
  );
}

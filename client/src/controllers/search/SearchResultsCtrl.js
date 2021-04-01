import React, { useState, useEffect } from "react";
import SearchResults from "../../components/search/SearchResults";
import { getMarkets } from "../../network";

export default function SearchResultsCtrl({ navigation }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const showDetail = (company) => {
    navigation.navigate("CryptoDetail", company);
  };

  const queryMarkets = async () => {
    const result = await getMarkets();
    if (!result || result.error) return setCryptoData([]);
    setCryptoData(result);
  };

  const filterMarketData = (array) => {
    let filteredData = array.filter((d) => {
      if (
        d.symbol.startsWith(`${searchQuery.toLowerCase()}`) ||
        d.name.toLowerCase().startsWith(`${searchQuery.toLowerCase()}`)
      )
        return d;
    });

    if (filteredData.length > 0) return filteredData;
    if (!filteredData || filteredData.length === 0) return [];
    return filteredData;
  };

  useEffect(() => {
    queryMarkets();
  }, []);

  useEffect(() => {
    const data = filterMarketData(cryptoData);
    setFilteredData(data);
  }, [searchQuery]);

  return (
    <SearchResults
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      filteredData={filteredData}
      showDetail={showDetail}
    />
  );
}

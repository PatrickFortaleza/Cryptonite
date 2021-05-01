import React, { useEffect } from "react";
import Detail from "../../components/list/Detail";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailCtrl({
  // Properties
  crypto,
  navigation,
}) {
  const AuthContext = useAuth();
  const { isAuthenticated } = AuthContext;
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [watchListData, setWatchListData] = useState(["bitcoin"]);

  // Function specifically for toggling the toggler's state
  const toggleWatchList = (e) => {
    setIsInWatchList(!isInWatchList);
  };

  /* 
    @desc Evaluates the watchList on mount. 
    This ensures that the toggler's state is set correctly when the 
    user "navigates" to the crypto detail page.
  */
  const evaluateWatchList = async () => {
    // 1.0 Pull watchListData from AsyncStorage
    let watchListData = await AsyncStorage.getItem("watchListData");

    // 2.0 Gaurd clause -- if no data exists in AsyncStorage, initialize default array.
    if (!watchListData && watchListData.length < 1)
      watchListData = [["bitcoin"]];

    // 3.0 Parse the JSON data, if it went thru the Gaurd clause, then this isn't necessary
    watchListData = JSON.parse(watchListData);

    // 4.0 Set watchListData state to what we "pulled" from AsyncStorage
    setWatchListData(watchListData);

    // 5.0 This is where we evaluate if the crypto that we're looking at is in  the WatchList.
    const bool = watchListData.includes(crypto.id);
    if (bool === true) setIsInWatchList(true);
  };

  /* 
    @desc Watches for changes in the toggler, decides what action
    the user wants to do, and performs that action using a case switch
  */
  const addRemoveWatchList = () => {
    // 1.0 We pull the state that the user just set the toggler to
    const toggleAction = isInWatchList;

    // 2.0 Switch case
    switch (toggleAction) {
      // 2.1 If the user switched this to true, he wants to add the crypto into the watchList
      case true:
        // 2.1.1 Gaurd clause, if watchListData already includes the id, break the case.
        if (watchListData.includes(crypto.id)) break;

        // 2.1.2 Initialize new array and save to state.
        const addedList = [...watchListData, crypto.id];
        setWatchListData(addedList);
        break;
      // 2.2 If the user switched this to false, he wants to add the crypto into the watchList
      case false:
        // 2.2.1 Initialize new array and save to state.
        const subtractedList = [...watchListData].filter(
          (cryptoId) => cryptoId !== crypto.id
        );
        setWatchListData(subtractedList);
        break;
    }
  };

  /* 
    @desc Saves the watchListData state to AsyncStorage 
    everytime watchListData is updated/changed.
  */
  const saveToStorage = async () => {
    await AsyncStorage.setItem("watchListData", JSON.stringify(watchListData));
  };

  useEffect(() => {
    evaluateWatchList();
  }, []);

  useEffect(() => {
    addRemoveWatchList();
  }, [isInWatchList]);

  useEffect(() => {
    saveToStorage();
  }, [watchListData]);

  const showBuy = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Buy", company);
  };

  const showSell = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Sell", company);
  };

  return (
    <Detail
      // METHOD
      showBuy={showBuy}
      showSell={showSell}
      toggleWatchList={toggleWatchList}
      // PROPERTIES
      crypto={crypto}
      isAuthenticated={isAuthenticated}
      isInWatchList={isInWatchList}
    />
  );
}

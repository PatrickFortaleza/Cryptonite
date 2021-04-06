import React, { useEffect } from "react";
import Detail from "../../components/list/Detail";
import { useAuth } from "../../context/AuthContext";
import { useWatchList} from "../../context/WatchListContext"
import { useState } from "react";
import useAsyncStorage from "../../hooks/useAsyncStorage"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailCtrl({
  // Properties
  crypto,
  navigation,
}) {
  const AuthContext = useAuth();
  const WatchListContext = useWatchList();

  const { isAuthenticated } = AuthContext;
  const { watchListData, setWatchListData} = WatchListContext;
  
  const toggleSwitch = async () => {
    //setIsEnabled(previousState => !previousState);
    //const watchList_ = await watchListData
  //   const id = crypto.id
  //   const existingData = [watchListData]
  //  const updatedArray = [...watchListData, id]
  //   setWatchListData(updatedArray)
  //   console.log( existingData)
  //   console.log(updatedArray)

  console.log(await watchListData)
  }

  // useEffect(()=> {
  //   setIsEnabled(isEnabled)   
  // },[isEnabled])

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
      toggleSwitch = {toggleSwitch}
      // PROPERTIES
      crypto={crypto}
      isAuthenticated={isAuthenticated}
      //isEnabled = {isEnabled}
    />
  );
}

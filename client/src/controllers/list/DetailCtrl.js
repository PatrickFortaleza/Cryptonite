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
  //const { watchListData, setWatchListData} = WatchListContext;

  const [isWatchList, setIsWatchList] = useState(false);
  const [ watchListData, setWatchListData] = useState([1,2,3]);

  const save = async() => {
    try{
        await AsyncStorage.setItem("watchListArray", JSON.stringify(watchListData))
        
        await AsyncStorage.setItem(crypto.id, JSON.stringify(isWatchList))
    }catch (err){
      console.log(err)
    }
  }

  const load = async() => {
    try{
      let jsonValue = await AsyncStorage.getItem("watchListArray")
      if(jsonValue != null){
        setWatchListData(JSON.parse(jsonValue))
      }

      let isWatch = await AsyncStorage.getItem(crypto.id)
      console.log(isWatch)
      if(!isWatch != null){
        setIsWatchList(isWatch)
      } else {
        setIsWatchList(false)
      }
    }catch (err){
      console.log(err)
    }
  }
  
  const toggleSwitch = () => {
    
    setIsWatchList(previousState => !previousState)
    console.log(isWatchList)
    const id = crypto.id
    const updatedArray = [...watchListData,id]
    setWatchListData(updatedArray)
    save()
    console.log(watchListData[4])

      //   const watchList_ = await watchListData
      //   const id = crypto.id
      //   const existingData = [watchListData]
      //   const updatedArray = [...watchListData, id]
      //   setWatchListData(updatedArray)

  }

  useEffect(()=> {
    setIsWatchList(isWatchList)   
  },[isWatchList])

  useEffect(()=>{
    load()
  },[]);

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
      isWatchList = {isWatchList}
    />
  );
}

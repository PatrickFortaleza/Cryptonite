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

  const [isWatchList, setIsWatchList] = useState(false);
  const [ watchListData, setWatchListData] = useState([]);  

  const save = async () => {
    try{
      await AsyncStorage.setItem("watchListData", JSON.stringify(watchListData))
    }catch(err){
      console.log(err)
    }
  }

  const load = async () => {
    try{
      let watchListData = await AsyncStorage.getItem('watchListData')
      if(watchListData !== null){
        setWatchListData(JSON.parse(watchListData))
      }
    }catch(err){
      console.log(err)
    }
  }

  const toggleSwitch = () => {
    setIsWatchList(previousState => !previousState)
    if(isWatchList == true){
      const id = crypto.id
      const updatedArray = [...watchListData, id]
      setWatchListData(updatedArray)
      save()
      console.log(watchListData)
    }
    
    if(isWatchList == false){
      const id = crypto.id
      let existingArray = [...watchListData]
      for( var i = 0; i < existingArray.length; i++){ 
        if ( existingArray[i] == crypto.id) {     
          existingArray.splice(i, 1); 
        }
      setWatchListData(existingArray)
      save()
      console.log(watchListData)
    }
      
    }
    
      //   const watchList_ = await watchListData
      //   const id = crypto.id
      //   const existingData = [watchListData]
      //   const updatedArray = [...watchListData, id]
      //   setWatchListData(updatedArray)

  }

  const showBuy = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Buy", company);
  };

  const showSell = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Sell", company);
  };

  useEffect(()=> {
    load()
  },[])

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

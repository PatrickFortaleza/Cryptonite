import React ,{useState, useEffect} from "react";
import List from "../../components/list/List"
import {Text} from "react-native";
import {cryptoData} from './fakedata.js'


export default function ListCtrl({navigation}) {

  const [cryptoData_, setCryptoData] = useState(cryptoData)
  const showDetail = (company) => {
    navigation.navigate('CryptoDetail', company)
  } 

  useEffect(()=> {
    setCryptoData(cryptoData)
    console.log(cryptoData)
  },[])

  return (
    <List
      // METHODS
      showDetail={showDetail}
      // PROPERTIES
      cryptoData = {cryptoData_}
    />
  );
}
 
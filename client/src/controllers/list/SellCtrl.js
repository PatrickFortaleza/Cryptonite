import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Sell from "../../components/list/Sell"

export default function SellCtrl({prop}){
  const [quantity, setQuantity] = useState(0)
  const [marketPrice, setMarketPrice] = useState(0)
  const [bookValue, setBookValue] = useState(0)

  const submitForm = async () => {
    try {
      // network to gateway
      const response = {
        quantity: quantity,
        marketPrice: marketPrice,
        bookValue: bookValue
      }
      console.log(response)
      // navigation.navigate("Complete");

    } catch (error) {
      console.log(error);
    }
  };

  return(
    <Sell 
      //METHOD
      setQuantity = {setQuantity}
      setMarketPrice = {setMarketPrice}
      setBookValue = {setBookValue}
      submitForm = {submitForm}

      //PROPERTIES
      prop = {prop}
    
    />

    
  )
}
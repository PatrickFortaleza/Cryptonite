import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Sell from "../../components/list/Sell"
import {sellCoin} from "../../network"

export default function SellCtrl({
  // PROPERTIES
  crypto,
  navigation

}){
  const [quantity, setQuantity] = useState(0)
  const [marketPrice, setMarketPrice] = useState(crypto.current_price)
  const [bookValue, setBookValue] = useState(0)

  const submitForm = async () => {
    try {
      navigation.navigate("Confirmation")
    // network to gateway
    const response = await sellCoin(crypto.id, quantity)
    console.log(response)
    
      

    } catch (error) {
      console.log(error);
    }
  };

  const calculateBookValue = async () => {
    console.log("calculateBookValue")
    const result = quantity * marketPrice
    console.log(result)
    if(typeof result !== "number") return 0

    setBookValue(result)
    
  }

  useEffect(()=>{
    calculateBookValue()
  },[quantity])

  return(
    <Sell 
      //METHOD
      setQuantity = {setQuantity}
      setMarketPrice = {setMarketPrice}
      setBookValue = {setBookValue}
      submitForm = {submitForm}

      //PROPERTIES
      crypto = {crypto}
      bookValue = {bookValue}
    
    />

    
  )
}
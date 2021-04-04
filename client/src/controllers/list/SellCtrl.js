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

  const submitForm = async (company) => {
    try {
    // network to gateway
    const response = await sellCoin(crypto.id, quantity)
    const text ={text: "This object"}
    console.log("sellCoin ", text)
    //navigation.navigate("Confirmation", company)
    navigation.navigate("Confirmation", text)
    
    } catch (error) {
      console.log(error);
    }
  };

  const calculateBookValue = async () => {
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
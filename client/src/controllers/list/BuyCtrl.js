import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Buy from "../../components/list/Buy"

export default function BuyCtrl({prop}){
  const [quantity, setQuantity] = useState(0)
  const [marketPrice, setMarketPrice] = useState(prop.current_price)
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
    <Buy 
      //METHOD
      setQuantity = {setQuantity}
      setMarketPrice = {setMarketPrice}
      setBookValue = {setBookValue}
      submitForm = {submitForm}

      //PROPERTIES
      prop = {prop}
      bookValue = {bookValue}
    
    />

    
  )
}
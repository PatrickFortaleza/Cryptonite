import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Buy from "../../components/list/Buy"

export default function BuyCtrl({prop}){
  const [quantity, setQuantity] = useState(0)
  const [marketPrice, setMarketPrice] = useState(0)
  const [bookValue, setBookValue] = useState(0)

  const submitForm = async () => {
    try {
      // const response = await Auth.signIn({
      //   quantity : quantity,
      //   marketPrice: marketPrice,
      //   bookValue : bookValue
      // });
      // navigation.navigate("Complete");
    } catch (error) {
      console.log(error);
    }
  };
 
  return(
    <Buy 
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
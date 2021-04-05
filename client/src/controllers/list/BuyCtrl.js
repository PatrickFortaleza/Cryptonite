import React,{ useState, useEffect } from "react";
import {Alert, Text} from "react-native";
import Buy from "../../components/list/Buy"
import { buyCoin } from "../../network"


export default function BuyCtrl({ 
  //PROPERTIES
  crypto, 
  navigation
}) {

  const [quantity, setQuantity] = useState(0);
  const [marketPrice, setMarketPrice] = useState(crypto.current_price);
  const [bookValue, setBookValue] = useState(0);

  const submitForm = async (company) => {
    
    if(quantity <= 0 || !Number.isInteger(quantity)){
      Alert.alert(
        "Input not valid",
        "Please enter an Integer greater than 0",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }

    if(quantity > 0 && Number.isInteger(quantity)){
      try {
        // network to gateway
        const response = await buyCoin(crypto.id, quantity)
  
        const transaction = { 
          company, 
          quantity,
          bookValue 
        }
  
        navigation.navigate("Confirmation", transaction); 
        // navigation.navigate("Confirmation", response)
        
      } catch (error) {
        console.log(error.response.data);
      }
    }
    
  };

  const calculateBookValue = async () => {
    const result = quantity * marketPrice;
    if (typeof result !== "number") return 0;
    setBookValue(result);
  };

  useEffect(() => {
    calculateBookValue();
  }, [quantity]);

  return (
    <Buy
      //METHOD
      setQuantity={setQuantity}
      setMarketPrice={setMarketPrice}
      setBookValue={setBookValue}
      submitForm={submitForm}
      //PROPERTIES
      crypto={crypto}
      bookValue={bookValue}
      quantity = {quantity}
      
    />
  );
}

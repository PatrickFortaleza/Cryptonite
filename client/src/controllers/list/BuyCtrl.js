import React,{ useState, useEffect } from "react";
import {Text} from "react-native";
import Buy from "../../components/list/Buy"
import { buyCoin } from "../../network"


export default function BuyCtrl({ 
  //Properties
  crypto , 
  navigation
}) {
  const [quantity, setQuantity] = useState(0);
  const [marketPrice, setMarketPrice] = useState(crypto.current_price);
  const [bookValue, setBookValue] = useState(0);

  const submitForm = async (company) => {
    try {
      // network to gateway
      const response = await buyCoin(crypto.id, quantity)
      console.log(response)

      navigation.navigate("Confirmation", company); 
      
    } catch (error) {
      console.log(error.response.data);
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
      
    />
  );
}

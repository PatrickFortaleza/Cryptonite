import React, { useState, useEffect } from "react";
import { Alert, Text } from "react-native";
import Sell from "../../components/list/Sell"
import { sellCoin } from "../../network"
import { useAuth } from "../../context/AuthContext";
import errorAlert from '../../utility/alert';


export default function SellCtrl({
  // PROPERTIES
  crypto,
  navigation,
  user,
}) {
  const authContext = useAuth();
  const [quantity, setQuantity] = useState(0);
  const [marketPrice, setMarketPrice] = useState(crypto.current_price);
  const [portfolioStats, setPortfolioStats] = useState({});
  const [bookValue, setBookValue] = useState(0);

  const { profileData } = authContext;
  const { positions } = profileData;

  const submitForm = async (company) => {

    if (quantity <= 0 || !Number.isInteger(quantity)) {
      Alert.alert(
        "Input not valid",
        "Please enter a number greater than 0",
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

    if (quantity > 0 && Number.isInteger(quantity)) {
      try {
        // network to gateway
        const response = await sellCoin(crypto.id, quantity)
        if (response.error) {
          errorAlert({ title: "Error", message: response.error?.response?.data });
          return;
        }

        const transaction = {
          company,
          quantity,
          bookValue
        }

        navigation.navigate("Confirmation", transaction);
        // navigation.navigate("Confirmation", response)
      } catch (error) {
        errorAlert({ title: "Error", message: error.response.data });
      }
    }
  };

  const calculateBookValue = async () => {
    const result = quantity * marketPrice;
    if (typeof result !== "number") return 0;

    setBookValue(result);
  };

  const findEvaluatePortfolioStat = () => {
    console.log(crypto.id);
    const foundStat = positions.filter(
      (position) => position.coin === crypto.id
    )[0];
    console.log(foundStat);
    if (!foundStat) setPortfolioStats({});
    setPortfolioStats(foundStat);
  };

  useEffect(() => {
    calculateBookValue();
  }, [quantity]);

  useEffect(() => {
    positions.length > 0 ? findEvaluatePortfolioStat() : null;
  }, [positions]);

  return (
    <Sell
      //METHOD
      setQuantity={setQuantity}
      setMarketPrice={setMarketPrice}
      setBookValue={setBookValue}
      submitForm={submitForm}
      //PROPERTIES
      crypto={crypto}
      bookValue={bookValue}
      quantity={quantity}
      user={user}
      portfolioStats={portfolioStats}
    />
  );
}

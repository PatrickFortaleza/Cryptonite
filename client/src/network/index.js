import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../AWSconfig.json";

const getToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("CryptoniteuserToken");
    if (!accessToken) throw Error("Invalid token");
    return JSON.parse(accessToken);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const INVOKE_URL = config.gateway.INVOKE_URL;
const BASE_URL = "https://api.coingecko.com/api/v3";

export const ping = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/ping`);
    return result?.data;
  } catch (error) {
    return {
      error: "Could not ping coingecko.",
    };
  }
};

export const getCoinList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/coin/list`);
    return result?.data;
  } catch (error) {
    return {
      error: "Could not retrieve coins from coingecko.",
    };
  }
};

export const getCoin = async ({ coinId }) => {
  try {
    const result = await axios.get(`${BASE_URL}/coins/${coinId}`);
    return result?.data;
  } catch (error) {
    return {
      error: "Could not retrieve coin data from coingecko.",
    };
  }
};

export const getMarkets = async () => {
  try {
    const result = await axios.get(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    );
    return result?.data;
  } catch (error) {
    return {
      error: "Could not retrieve market data from coingecko.",
    };
  }
};

export const getPrice = async ({ coinId }) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/simple/price?ids=${coinId}&vs_currencies=USD`
    );
    return result?.data;
  } catch (error) {
    return {
      error: "Could not retrieve price data from coingecko.",
    };
  }
};

export const getUser = async () => {
  const token = await getToken();
  if (!token)
    return {
      error: "Unable to authorize token",
    };

  try {
    const response = await axios.get(`${INVOKE_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const buyCoin = async (coinId, numberOfCoins) => {
  const token = await getToken();
  console.log(token);
  if (!token)
    return {
      error: "Unable to authorize token",
    };

  console.log(coinId);
  console.log(numberOfCoins);
  try {
    console.log(`${INVOKE_URL}/buy/${coinId}`);
    const response = await axios.post(
      `${INVOKE_URL}/buy/${coinId}`,
      {
        numberOfCoins: numberOfCoins,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
    return {
      error: error,
    };
  }
};

export const sellCoin = async (coinId, numberOfCoins) => {
  const token = await getToken();
  console.log(token);
  if (!token)
    return {
      error: "Unable to authorize token",
    };

  try {
    console.log(`${INVOKE_URL}/sell/${coinId}`);
    const response = await axios.post(
      `${INVOKE_URL}/sell/${coinId}`,
      {
        numberOfCoins: numberOfCoins,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
    return {
      error: error,
    };
  }
};

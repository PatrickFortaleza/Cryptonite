import axios from "axios";

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

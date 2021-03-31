const axios = require('axios');

const BASE_URL = 'https://api.coingecko.com/api/v3'

const ping = async () => {
  const result = await axios.get(`${BASE_URL}/ping`);
  return result?.data;
}

exports.ping = ping;

const getCoinList = async () => {
  const result = await axios.get(`${BASE_URL}/coins/list`);
  return result?.data;
}

exports.getCoinList = getCoinList;

const getCoin = async (id) => {
  const result = await axios.get(`${BASE_URL}/coins/${id}`);
  return result?.data;
}

exports.getCoin = getCoin;

const getMarkets = async () => {
  const result = await axios.get(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`);
  return result?.data;
}

exports.getMarkets = getMarkets;

const getPrice = async (id) => {
  const result = await axios.get(`${BASE_URL}/simple/price?ids=${id}&vs_currencies=USD`);
  return result;
}

exports.getPrice = getPrice;

export interface Transaction {
  coinId: string, // ObjectId
  numberOfCoins: number,
  marketValuePerCoin: number,
  dateOfPurchase: number // Unix Timestamp
}
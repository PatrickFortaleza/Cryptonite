import { Transactions } from "./Transactions"

export interface User {
  email: string,
  password: string,
  transactions: Transactions,
  bookValue: number,
  cash: number, // Default 50,0000
}
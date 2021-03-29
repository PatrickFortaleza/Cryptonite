import { Transaction } from "./Transaction"

export interface User {
  email: string,
  password: string,
  transactions: Array<Transaction>,
  bookValue: number,
  cash: number, // Default 50,0000
}
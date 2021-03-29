import { Transaction } from "./Transaction"

export interface User {
  id: string, // ObjectId
  email: string,
  password: string,
  transactions: Array<Transaction>,
  bookValue: number,
  cash: number, // Default 50,0000
}
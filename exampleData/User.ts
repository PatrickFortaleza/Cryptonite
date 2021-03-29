import { User } from '../schemas/User'

const userData: User = {
  id: "890449e9-7b73-475c-b9f3-5bb50eb41968",
  email: "exampleEmail@gmail.com",
  password: "$2y$12$ITzE2KZRSM/qtWGU64OQKeYA1tf0J7Hrc9y3k.GFG4EsvUTlfwGTa",
  transactions: [{
    coinId: "6e09279c-ad54-4ac2-888d-55f5c4e36f99",
    numberOfCoins: 2,
    marketValuePerCoin: 11,
    dateOfPurchase: 1617058328
  }, 
  {
    coinId: "890449e9-7b73-475c-b9f3-5bb50eb41968",
    numberOfCoins: 2,
    marketValuePerCoin: 22,
    dateOfPurchase: 1617058378
  },
  {
    coinId: "6e09279c-ad54-4ac2-888d-55f5c4e36f99",
    numberOfCoins: -1,
    marketValuePerCoin: 11,
    dateOfPurchase: 1617058378
  }],
  cash: 49945,
  bookValue: 55
}

console.log(userData)
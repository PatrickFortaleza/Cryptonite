const connectToDatabase = require("/opt/nodejs/database");
const proxyResponse = require("/opt/nodejs/baseResponse");
const { getPrice } = require("/opt/nodejs/gecko");

exports.handler = async (event) => {
  const sub = event.requestContext?.authorizer?.claims?.sub;

  if (!sub) {
    return proxyResponse("User not authorized", 400);
  }
  
  const getCurrentPrice = async (id) => {
    const marketValue = await getPrice(id);
    const price = marketValue.data[id].usd;
    return price
  }
  const id = 'eos'
 const price = await getCurrentPrice(id)
 console.log(price)
//   if (!event.body) {
//     return proxyResponse("Empty body", 400);
//   }
//   let messageData;
//   try {
//     messageData = JSON.parse(event.body);
//   } catch (error) {
//     return proxyResponse("Improper body", 400);
//   }

  const db = await connectToDatabase();
  const user = db.collection("users");

  try {
    const result = await user
      .aggregate([
        { $unwind: "$transactions" },
        { $match: { _id: sub } },
        { $replaceRoot: { newRoot: "$transactions" } },
        {
          $group: {
            _id: { coinId: "$coinId" },
            totalCoins: { $sum: { $toInt: "$numberOfCoins" } },
            totalAmount: {
                $sum : { $multiply: [ { $toInt: "$numberOfCoins" }, "$marketValue" ] } 
            },
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

// const test = (result) => {
//   return Promise.all(result.map(async (t) => 
//     {
//       return{
//         coin: t._id.coinId,
//         totalCoins: t.totalCoins,
//         totalAmount: t.totalAmount,
//         averagePrice: t.totalAmount / t.totalCoins,
//         currentPrice: await getCurrentPrice(t._id.coinId),
//       }
// }))
// }

// test(result);

   const positions = result.map((t) => ({
  coin: t._id.coinId,
  totalCoins: t.totalCoins,
  totalAmount: t.totalAmount,
  averagePrice: t.totalAmount / t.totalCoins,
  // currentPrice: getCurrentPrice(t._id.coinId),
  currentPrice: 6.20,
  difference: (t.totalAmount - (t.totalCoins * 6.20))
}));
console.log(positions);
    
  return proxyResponse({positions});
  } catch (error) {
    return proxyResponse(error.stack, 500);
  }
};

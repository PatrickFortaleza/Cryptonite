const connectToDatabase = require("/opt/nodejs/database");
const proxyResponse = require("/opt/nodejs/baseResponse");
const { getPrice } = require("/opt/nodejs/gecko");

exports.handler = async (event) => {
  const sub = event.requestContext?.authorizer?.claims?.sub;

  if (!sub) {
    return proxyResponse("User not authorized", 400);
  }

  // get the current price
  const getCurrentPrice = async (id) => {
    const marketValue = await getPrice(id);
    const price = marketValue.data[id].usd;
    return price
  }


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
              $sum: { $multiply: [{ $toInt: "$numberOfCoins" }, "$marketValue"] }
            },
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    const positions = await Promise.all(result.map(async (t) => {
      const currPrice = await getCurrentPrice(t._id.coinId)
      return {
        coin: t._id.coinId,
        totalCoins: t.totalCoins,
        totalAmount: t.totalAmount,
        averagePrice: t.totalAmount / t.totalCoins,
        currentPrice: currPrice,
        totalCurrValue: t.totalCoins * currPrice,
        difference: (t.totalAmount - (t.totalCoins * currPrice))
      }
    }));

    const cash = await user.find({ _id: sub }, { cash: 1, _id: 0 }).toArray()
    userCash = cash[0].cash

    const currentValueOfCoins = positions.reduce((acc, val) => val.totalCurrValue + acc.totalCurrValue);
    const portfolioValue = userCash + currentValueOfCoins

    return proxyResponse({ positions, portfolioValue });

  } catch (error) {
    return proxyResponse(error.stack, 500);
  }
};

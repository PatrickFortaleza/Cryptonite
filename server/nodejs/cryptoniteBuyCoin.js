const connectToDatabase = require('/opt/nodejs/database');
const proxyResponse = require('/opt/nodejs/baseResponse');
const {getPrice} = require('/opt/nodejs/gecko')

exports.handler = async (event) => {
    const sub = event.requestContext?.authorizer?.claims?.sub;
    if (!sub) {
    return proxyResponse('User not authorized', 400);
  }

    const numberOfCoins = event.numberOfCoins;
    const coinId = event.pathParameters.coin;
    const marketValue = await getPrice(coinId);
    const price = marketValue.data[coinId].usd;
    const db = await connectToDatabase();
    const purchaseValue = (numberOfCoins * price);
    const user = db.collection('users');
    try{
        const update = await user.update(
        {   _id : sub,
            cash : {$gt: purchaseValue}
        },
        {
            "$inc": { "cash" : -purchaseValue },
            $push: {transactions: {coinId: coinId, numberOfCoins: numberOfCoins, marketValue: price, dateOfPurchase: new Date()} }
        }
        );

        if (update.result?.n === 0){
            return proxyResponse("Insufficient balance", 400);
        }
        return proxyResponse({});
    } catch (error){
    return proxyResponse(error.stack, 500);
  }

};

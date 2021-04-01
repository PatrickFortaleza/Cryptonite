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
    console.log(price);
    const db = await connectToDatabase();
    const purchaseValue = (numberOfCoins * price);
    const user = db.collection('users');
    try{
        const update = user.update(
        { _id : sub},
        {
            "$inc": { "cash" : purchaseValue },
          $push: {transactions: {coinId: coinId, numberOfCoins: -(numberOfCoins), marketValue: price, dateOfPurchase: new Date()} }
        }
        );
       
        return proxyResponse(update);
    } catch (error){
    return proxyResponse(error.stack, 500);
  }
    
};

const connectToDatabase = require('/opt/nodejs/database');
const proxyResponse = require('/opt/nodejs/baseResponse');
const {getPrice} = require('/opt/nodejs/gecko')

exports.handler = async (event) => {
    const sub = event.requestContext?.authorizer?.claims?.sub;
    if (!sub) {
    return proxyResponse('User not authorized', 400);
  }
    
    const numberOfCoins = event.numberOfCoins;
    const coinId =event.pathParameters.coin; 
    const marketValue = await getPrice(coinId);
   const price = marketValue.data[coinId].usd;
    const db = await connectToDatabase();
    const purchaseValue = (numberOfCoins * price);
    const user = db.collection('users');
   
    try{
        const result = await user.aggregate( [
    { $unwind: "$transactions" },
    { $match: { "transactions.coinId" : coinId , "_id": sub} },
    { $replaceRoot: { newRoot: "$transactions" } },
    { $group: { _id:{coinId: "$coinId"}, totalCoins: { $sum: { $toInt: "$numberOfCoins"}}, count: {$sum: 1}}}
    ]).toArray()
    var totalCoins = result[0].totalCoins
    
    db.users.aggregate( [
        { $unwind: "$transactions" },
        { $match: { "transactions.coinId" : "eos" , "_id": "f901b5bd-605d-4e25-a6fd-d8b16ed33034", "transactions.numberOfCoins": {$gt: 1}} },
        { $replaceRoot: { newRoot: "$transactions" } },
        {$sort: {"dateOfPurchase" : -1} }
        ])



    if(numberOfCoins < totalCoins){
        const update = user.updateOne(
        { _id : sub, },
        {
            "$inc": { "cash" : purchaseValue },
            $push: {transactions: {coinId: coinId, numberOfCoins: -(numberOfCoins), marketValue: price, dateOfSale: new Date()} }
        }
        );
        return proxyResponse({});
    }
    return proxyResponse("Not Enough Coins", 400);
        
    } catch (error){
    return proxyResponse(error.stack, 500);
  }
    
};


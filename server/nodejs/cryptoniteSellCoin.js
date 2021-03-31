const connectToDatabase = require('/opt/nodejs/database');

exports.handler = async (event) => {
    
     if (!event.request?.userName || !event.request?.userAttributes){
    console.log("Improper user object.")
    return;
  }
    
    const numberOfCoins = event.numberOfCoins;
    const marketValue = event.marketValue;
    const coinId = event.pathParameters.coin;  
    
    const db = await connectToDatabase();
    const purchaseValue = (numberOfCoins * marketValue);
    const user = db.collection('users');
    try{
        const update = user.update(
        { _id : event.request.userAttributes.sub},
        {
            "$inc": { "cash" : purchaseValue },
            $push: {transactions: {coinId: coinId, numberOfCoins: -(numberOfCoins), marketValue: marketValue} }
        }
        );
       
        const response = {
            statusCode: 200,
            body: JSON.stringify(update),
        };
        return response;
    } catch (error){
    console.log(error.message)
  }
    
};

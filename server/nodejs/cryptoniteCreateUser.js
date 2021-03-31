const connectToDatabase = require('/opt/nodejs/database');

exports.handler = async (event, context) => {
  console.log(`Attempted to create user with ${JSON.stringify(event)}`)
  const DEFAULT_CASH = 50000;
  if (!event.request.userAttributes.sub){
    context.done("Improper user object", event);
    return;
  }
  const user = {
    _id: event.request.userAttributes.sub,
    email: event.request.userAttributes.email,
    username: event.userName,
    cash: DEFAULT_CASH,
    bookValue: 0,
    transactions: []
  }


  const db = await connectToDatabase();
  const users = db.collection('users');
  try{
    await users.insertOne(user);
    context.done(null, event);
    return;
  } catch (error){
    context.done(error, event);
  }
};

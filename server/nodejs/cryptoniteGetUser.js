const connectToDatabase = require('/opt/nodejs/database');
const proxyResponse = require('/opt/nodejs/baseResponse');

exports.handler = async (event, context) => {
  const sub = event.requestContext?.authorizer?.claims?.sub;
  if (!sub) {
    return proxyResponse('User not authorized', 400);
  }

  const db = await connectToDatabase();
  const users = db.collection('users');
  try {
    const user = await users.findOne({
      _id: sub
    });

    return proxyResponse(user);
  } catch (error) {
    return proxyResponse(error.stack, 500);
  }
};

const connectToDatabase = require('/opt/nodejs/database');
const aws = require('aws-sdk');
const cognito = new aws.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    const username = event.user.username;
    const password = event.user.password;
    const email = event.user.email;
        const params = {
            ClientId: "6gd4pka0plvnbupartrdsfgc7b",
            Username: username,
            Password: password,
        };
        cognito.signUp(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        });
    const db = await connectToDatabase();
    const users = db.collection('users');
    const result = users.insertOne({email: email, username: username, password: password, cash: 50000});
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify("Record inserted"),
    };
    return response;
};

// const AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-east-1",
// });

// const docClient = new AWS.DynamoDB.DocumentClient();

// const table = "Users";

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${await message({ time: 1, copy: "Your function executed successfully!" })}`,
    }),
  };
};

const message = ({ time, ...rest }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(`${rest.copy} (with a delay)`);
    }, time * 1000)
  );

// module.exports.addUser = async event => {
//   let username = event.username;
//   let role = event.role;

//   let params = {
//     TableName: table,
//     Item: {
//       username: username,
//       role: role,
//     },
//   };

//   try {
//     console.log("Adding a new user...");
//     let result = await docClient
//       .put(params, function (err, data) {
//         if (err) {
//           console.error("Unable to add item. Error:", JSON.stringify(err, null, 2));
//         } else {
//           console.log("Added item:", JSON.stringify(data, null, 2));
//         }
//       })
//       .promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Go Serverless v1.0! Your function executed successfully!",
//         data: result,
//       }),
//     };
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// module.exports.getUser = async event => {
//   let params = {
//     TableName: table,
//     Key: {
//       username: event,
//     },
//   };
//   try {
//     let result = await docClient
//       .get(params, function (err, data) {
//         if (err) {
//           console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//           console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
//         }
//       })
//       .promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Executed successfully",
//         data: result,
//       }),
//     };
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// module.exports.deleteUser = async event => {
//   let params = {
//     TableName: table,
//     Key: {
//       username: event,
//     },
//   };

//   try {
//     console.log("Attempting a delete...");
//     let result = await docClient
//       .delete(params, function (err, data) {
//         if (err) {
//           console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//           console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
//         }
//       })
//       .promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Executed successfully",
//         data: result,
//       }),
//     };
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// module.exports.updateUser = async event => {
//   let username = event.username;
//   let role = event.role;

//   let params = {
//     TableName: table,
//     Key: { username: username },
//     UpdateExpression: "set role = :r",
//     ExpressionAttributeValues: {
//       ":r": role,
//     },
//     ReturnValues: "UPDATED_NEW",
//   };

//   try {
//     console.log("Updating the item...");
//     let result = await docClient
//       .update(params, function (err, data) {
//         if (err) {
//           console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//           console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//         }
//       })
//       .promise();
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Executed successfully",
//         data: result,
//       }),
//     };
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

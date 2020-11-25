import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
	const params = {
		TableName: process.env.tableName,
		ProjectionExpression: "username, #r",
		// 'ExpressionAttributeValues' defines the value in the condition
		// - ':username': defines 'username' to be the username of the user
		ExpressionAttributeNames: {
			"#r": "role",
		},
	};

	const result = await dynamoDb.scan(params);

	// Return the matching list of items in response body
	return result.Items;
});

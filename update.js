import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
	// Request body is passed in as a JSON encoded string in 'event.body'
	const data = JSON.parse(event.body);
	const role = data.role;

	const params = {
		TableName: process.env.tableName,
		Key: {
			username: event.pathParameters.id,
		},
		// 'UpdateExpression' defines the attributes to be updated
		// 'ExpressionAttributeValues' defines the value in the update expression
		UpdateExpression: "SET #r = :r",
		// Default to base user role if not passed in
		ExpressionAttributeValues: {
			":r": role || "user",
		},
		ExpressionAttributeNames: {
			"#r": "role",
		},
	};

	await dynamoDb.update(params);
	return { status: true };
});

import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
	// Request body is passed in as a JSON encoded string in 'event.body'
	const data = JSON.parse(event.body);
	const username = data.username;
	const role = data.role;

	const params = {
		TableName: process.env.tableName,
		Item: {
			username: username,
			role: role,
		},
	};

	await dynamoDb.put(params);
	return params.Item;
});

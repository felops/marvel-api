const { DocumentClient } = require("aws-sdk/clients/dynamodb")

const DynamoDB = new DocumentClient({
  endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
  sslEnabled: false,
  region: "local"
})

module.exports = DynamoDB

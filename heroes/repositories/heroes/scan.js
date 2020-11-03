module.exports = (dynamodb) => async () => {
  return dynamodb.scan({
    TableName : 'marvel-heroes',
  })
    .promise()
    .then(({ Items }) => Items)
}

module.exports = (dynamodb) => async () => {
  return dynamodb.scan({
    TableName : 'marvel-movies',
  })
    .promise()
    .then(({ Items }) => Items)
}

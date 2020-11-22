module.exports = {
  tables: [
    {
      TableName: 'marvel-heroes',
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "N" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      },
      data: [
        {
          id: 3,
          movie: 'avengers',
          name: 'Spider-man'
        },
        {
          id: 2,
          movie: 'guardians of the galaxy',
          name: 'Groot'
        },
        {
          id: 1,
          movie: 'x-men',
          name: 'Wolverine'
        },
      ]
    },
    {
      TableName: 'marvel-movies',
      KeySchema: [{ AttributeName: "name", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      },
      data: [
        { name: 'guardians of the galaxy' },
        { name: 'avengers' },
        { name: 'x-men' },
      ]
    },
  ],
  basePort: 8000
}

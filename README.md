# Marvel Heroes
An awesome app that consumes the official [Marvel API](https://developer.marvel.com)!

<br>

## Demo
[<img src="https://img.shields.io/badge/MARVELFLIX-%23F0131E?logoColor=white&style=for-the-badge" />](https://marvelflix.felops.vercel.app)

<br>

## Technology
This API was built with serverless in mind. The requests are received by an API Gateway and proxed to lambdas. Those lambdas fetch the data from Marvel API, but as Marvel API does not have a way to fetch heroes by Movies, there is a lambda that fetches all heroes by movies on DynamoDB.

<br>

## Structure
All the backend code for the API is in this repository. The project has 2 more repositories:
- [Infrastructure](https://github.com/felops/marvel-terraform)
- [Frontend](https://github.com/felops/marvelflix)

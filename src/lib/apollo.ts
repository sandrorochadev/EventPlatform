import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.hygraph.com/v2/cl5rgstcv06bx01uohqboen85/master',
  cache: new InMemoryCache()
})
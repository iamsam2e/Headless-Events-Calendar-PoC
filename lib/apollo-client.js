import { ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI, // Use the environment variable for the URI
  cache: new InMemoryCache(),
});

export default client;

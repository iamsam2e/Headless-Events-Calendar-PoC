import { extractFragmentContext } from "@apollo/client/cache/inmemory/helpers";
import { ApolloClient, InMemoryCache } from "apollo/client";

const client = new ApolloClient({
  uri: "http://dynamic-calendar-headless.local/graphql",
  //change this domain at prod to use .env
  cache: new InMemoryCache(),
});

export default client;

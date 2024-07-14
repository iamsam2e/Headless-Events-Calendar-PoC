import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

function EventApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default EventApp;

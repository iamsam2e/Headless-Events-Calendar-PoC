import { format } from "date-fns";
import { GET_EVENTS } from "../../lib/queries";
import { EventCard } from "./components/EventCard";

// Load environment variables from .env file
const graphqlUri = process.env.REACT_APP_GRAPHQL_URI;

async function getEvents() {
  const res = await fetch(graphqlUri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_EVENTS,
      variables: { first: 10 },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getEvents();

  if (!data) return <p>Loading ...</p>;
  if (data.errors) return <p>Error: {data.errors[0].message}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Events Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.events.edges.map(({ node }) => (
          <EventCard key={node.id} event={node} />
        ))}
      </div>
    </div>
  );
}
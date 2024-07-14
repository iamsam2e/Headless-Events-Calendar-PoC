import { format, parseISO } from "date-fns";
import { GET_EVENTS } from "../../lib/queries";

async function getEvents() {
  const res = await fetch("http://dynamic-calendar-headless.local/graphql", {
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
    <div>
      <h1>Events Calendar</h1>
      <ul>
        {data.data.events.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <p>
              Date:{" "}
              {format(parseISO(node.eventDetails.eventDate), "dd/MM/yyyy")}
            </p>
            <p>Time: {node.eventDetails.eventTime}</p>
            <p>Location: {node.eventDetails.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

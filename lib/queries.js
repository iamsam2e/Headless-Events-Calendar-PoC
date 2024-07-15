export const GET_EVENTS = `
  query GetEvents($first: Int) {
    events(first: $first) {
      edges {
        node {
          id
          title
          eventDetails {
            eventDate
            eventTime
            location
          }
        }
      }
    }
  }
`;
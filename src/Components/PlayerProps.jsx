import React, { useState } from 'react';
import Header from '../Header';

function PlayerProps() {
  const [eventsData, setEventsData] = useState([]);

  const fetchUpcomingEvents = async () => {
    try {
      const response = await fetch(/* Your API URL for events */);
      const data = await response.json();
      setEventsData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
        < Header />
      <button onClick={fetchUpcomingEvents}>Fetch Upcoming Events</button>
      {/* Render your events and player props data here */}
    </div>
  );
}

export default PlayerProps;

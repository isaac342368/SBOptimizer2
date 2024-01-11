import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from './footer';

function Spread() {
  const [spreadData, setSpreadData] = useState([]);

  useEffect(() => {
    const fetchSpreadData = async () => {
      try {
        const response = await fetch(/* Your API URL for spread */);
        const data = await response.json();
        setSpreadData(data);
      } catch (error) {
        console.error("Error fetching spread data:", error);
      }
    };

    fetchSpreadData();
  }, []);

  return (
     <div>
    <div id="spreadContent">
      < Header />
      <h2>Spread Odds</h2>
      {/* Render your spread data here */}
    </div>
    <Footer/>
    </div>
  );
}

export default Spread;

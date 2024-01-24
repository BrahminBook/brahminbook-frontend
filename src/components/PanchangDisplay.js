// src/components/PanchangDisplay.js

import React, { useEffect, useState } from 'react';

const PanchangDisplay = () => {
  const [todayDate, setTodayDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [panchangData, setPanchangData] = useState({}); // You should replace this with your actual panchang data source

  useEffect(() => {
    // Function to get today's date
    const getTodayDate = () => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const today = new Date();
      return today.toLocaleDateString(undefined, options);
    };

    // Function to get real-time time
    const getCurrentTime = () => {
      const now = new Date();
      return now.toLocaleTimeString();
    };

    // Function to fetch and update panchang data (replace with actual logic)
    const fetchPanchangData = () => {
      // Replace this with your actual logic to fetch panchang data
      // For demonstration purposes, setting a dummy panchang data
      setPanchangData({
        sunrise: '6:00 AM',
        sunset: '6:00 PM',
        tithi: 'Krishna Paksha Ekadashi',
        yoga: 'Vishkambha',
        nakshatra: 'Rohini',
      });
    };

    // Update today's date and current time every second
    const updateDateTime = () => {
      setTodayDate(getTodayDate());
      setCurrentTime(getCurrentTime());
    };

    // Initial data fetch
    fetchPanchangData();

    // Start updating date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={panchangStyle}>
      <h2>Panchang for Today</h2>
      <p>{todayDate}</p>
      <p>Current Time: {currentTime}</p>
      <div>
        <h3>Panchang Details:</h3>
        <p>Sunrise: {panchangData.sunrise}</p>
        <p>Sunset: {panchangData.sunset}</p>
        <p>Tithi: {panchangData.tithi}</p>
        <p>Yoga: {panchangData.yoga}</p>
        <p>Nakshatra: {panchangData.nakshatra}</p>
        {/* Add more panchang details as needed */}
      </div>
    </div>
  );
};

// Styles
const panchangStyle = {
  backgroundColor: '#FF9800', // Change background color for panchang display
  padding: '20px',
  color: '#fff', // Change text color for panchang display
};

export default PanchangDisplay;

import React from 'react';

const PanchangDisplay = ({ day, panchangInfo }) => {
  return (
    <div>
      <h2>Day and Panchang</h2>
      <p>Day: {day}</p>
      {/* Display Panchang information here */}
    </div>
  );
};

export default PanchangDisplay;

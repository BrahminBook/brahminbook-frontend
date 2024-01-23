import React from 'react';

const CityList = ({ cities, onSelectCity }) => {
  return (
    <div>
      <h2>Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id} onClick={() => onSelectCity(city)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;

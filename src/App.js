import React, { useState } from 'react';
import Header from './components/Header';
import CityList from './components/CityList';
import BrahminList from './components/BrahminList';
import BrahminProfile from './components/BrahminProfile';
import SearchBar from './components/SearchBar';
import PanchangDisplay from './components/PanchangDisplay'; // Import the PanchangDisplay component
import citiesData from './data/Cities';
import brahminsData from './data/Brahmins';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBrahmin, setSelectedBrahmin] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedBrahmin(null);
  };

  const handleBrahminSelect = (brahmin) => {
    setSelectedBrahmin(brahmin);
  };

  const handleSearch = (query) => {
    // Implement search logic based on your requirements
    // Update setSearchResults with the filtered results
  };

  return (
    <div>
      <Header />
      <PanchangDisplay /> {/* Render the PanchangDisplay component */}
      <CityList cities={citiesData} onSelectCity={handleCitySelect} />
      <BrahminList
        brahmins={selectedCity ? brahminsData.filter(b => b.city === selectedCity.name) : []}
        onSelectBrahmin={handleBrahminSelect}
      />
      <SearchBar onSearch={handleSearch} />
      {selectedBrahmin && <BrahminProfile brahmin={selectedBrahmin} />}
      {/* Add other components or content as needed */}
    </div>
  );
};

export default App;

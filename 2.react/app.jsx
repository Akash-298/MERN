import React, { useState } from 'react';

const countries = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity(null);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cities = selectedCountry
    ? countries.find((country) => country.value === selectedCountry).cities
    : [];

  return (
    <div>
      <h2>Select a Country</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--Please choose a country--</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      <h2>Select a City</h2>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">--Please choose a city--</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <h3>Selected Country: {selectedCountry}</h3>
      <h3>Selected City: {selectedCity}</h3>
    </div>
  );
}

export default App;

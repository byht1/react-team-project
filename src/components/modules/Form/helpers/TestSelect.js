import React, { useState } from 'react';

const breeds = [
  'Лабрадор',
  'Золотистый ретривер',
  'Пудель',
  'Бульдог',
  'Боксер',
  'Немецкая овчарка',
];

export const BreedList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState(breeds);

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
    filterBreeds(event.target.value);
  };

  const filterBreeds = searchInput => {
    const filteredBreeds = breeds.filter(breed =>
      breed.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredBreeds(filteredBreeds);
  };

  return (
    <div>
      <label htmlFor="breed">Порода собаки:</label>
      {/* <input
        type="text"
        id="breed"
        name="breed"
        value={searchInput}
        onChange={handleSearchInputChange}
      /> */}
      <input list="breed" />
      <datalist id="breed">
        <option value="Чебурашка"></option>
        <option value="Крокодил Гена"></option>
        <option value="Шапокляк"></option>
      </datalist>
    </div>
  );
};

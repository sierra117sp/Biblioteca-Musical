import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist.trim()) {
      onSearch(artist.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar artista..."
        value={artist}
        onChange={e => setArtist(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;

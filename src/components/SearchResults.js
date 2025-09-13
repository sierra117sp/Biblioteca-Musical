import React from 'react';
import './SearchResults/styles.css';
import Song from './Song';

const SearchResults = ({ songs, onAdd }) => (
  <div className='search-results'>
    <h2>Resultados de búsqueda</h2>
    <p>{songs.length}</p>
    <div className='songs-list'>
      {songs.map(song => (
        <div key={song.id} className='search-song-item'>
          <Song {...song} />
          <button onClick={() => onAdd(song)}>
            Agregar a mi biblioteca
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default SearchResults;

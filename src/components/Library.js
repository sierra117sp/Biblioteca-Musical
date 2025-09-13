import React from 'react';
import './Library/styles.css';
import Song from './Song';

const Library = ({ songs }) => (
  <div className='library'>
    <h2>Mi Playlist Favorita</h2>
    <p>{songs.length}</p>
    <div className='songs-list'>
      {songs.map(song => (
        <Song key={song.id} {...song} />
      ))}
    </div>
  </div>
);

export default Library;

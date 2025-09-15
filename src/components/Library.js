import React from 'react';
import Song from './Song';
import styled from 'styled-components';

const LibraryContainer = styled.div`
  background: linear-gradient(90deg, #fffde7 0%, #fff9c4 100%);
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(44,62,80,0.08);
`;
const LibraryTitle = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Library = ({ songs }) => (
  <LibraryContainer>
    <LibraryTitle>Mi Playlist Favorita</LibraryTitle>
    <p>{songs.length}</p>
    <div>
      {songs.map(song => (
        <Song key={song.id} {...song} />
      ))}
    </div>
  </LibraryContainer>
);

export default Library;

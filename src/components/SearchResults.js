import React from 'react';
import Song from './Song';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  background: linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(44,62,80,0.08);
`;
const ResultsTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
const SongItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;
const AddButton = styled.button`
  background: linear-gradient(90deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.accent} 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #1565c0 0%, #1e3c72 100%);
  }
`;

const SearchResults = ({ songs, onAdd }) => (
  <ResultsContainer>
    <ResultsTitle>Resultados de búsqueda</ResultsTitle>
    <p>{songs.length}</p>
    <div>
      {songs.map(song => (
        <SongItem key={song.id}>
          <Link to={`/song/${song.id}`} style={{ textDecoration: 'none', flex: 1 }}>
            <Song {...song} />
          </Link>
          <AddButton onClick={() => onAdd(song)}>
            Agregar a mi biblioteca
          </AddButton>
        </SongItem>
      ))}
    </div>
  </ResultsContainer>
);

export default SearchResults;

import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  padding: 0.7rem 1.2rem;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  font-size: 1rem;
  margin-right: 1rem;
  outline: none;
`;
const Button = styled.button`
  background: linear-gradient(90deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.accent} 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #1565c0 0%, #1e3c72 100%);
  }
`;

const SearchBar = ({ onSearch }) => {
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist.trim()) {
      onSearch(artist.trim());
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Buscar artista..."
        value={artist}
        onChange={e => setArtist(e.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default SearchBar;

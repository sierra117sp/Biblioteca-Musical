import React from 'react';
import styled from 'styled-components';

const SongCard = styled.div`
    background: linear-gradient(90deg, #f8fafc 0%, ${({ theme }) => theme.card} 100%);
    border-radius: 12px;
    margin: 0.75rem 0;
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 12px rgba(44,62,80,0.08);
    transition: box-shadow 0.2s;
    &:hover {
        box-shadow: 0 4px 24px rgba(44,62,80,0.18);
    }
`;

const SongInfo = styled.div``;
const SongTitle = styled.h3`
    font-weight: bold;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.2rem;
`;
const SongArtist = styled.p`
    color: ${({ theme }) => theme.accent};
    font-size: 1rem;
    margin-bottom: 0.1rem;
`;
const SongAlbum = styled.p`
    color: #555;
    font-size: 0.95rem;
`;
const SongDuration = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.accent};
    font-weight: 500;
`;

const Song = ({ titulo, artista, album, duracion }) => (
    <SongCard>
        <SongInfo>
            <SongTitle>{titulo}</SongTitle>
            <SongArtist>{artista}</SongArtist>
            <SongAlbum>{album}</SongAlbum>
        </SongInfo>
        <SongDuration>
            <span>{duracion}</span>
        </SongDuration>
    </SongCard>
);

export default Song;
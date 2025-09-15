import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';

const DetailContainer = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(44,62,80,0.08);
`;
const AlbumTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
const TrackList = styled.ul`
  margin-top: 1.5rem;
  padding-left: 1.2rem;
`;
const TrackItem = styled.li`
  font-size: 1rem;
  color: ${({ theme, highlight }) => highlight ? theme.primary : theme.text};
  margin-bottom: 0.3rem;
`;

const SongDetail = () => {
  const { id } = useParams();
  const albumUrl = `https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`;
  const tracksUrl = `https://theaudiodb.com/api/v1/json/2/track.php?m=${id}`;
  const { data: albumData, loading: albumLoading, error: albumError, refetch: refetchAlbum } = useFetch(albumUrl);
  const { data: tracksData, loading: tracksLoading, error: tracksError, refetch: refetchTracks } = useFetch(tracksUrl);

  if (albumLoading || tracksLoading) return <div>Cargando detalles...</div>;
  if (albumError) return <div>Error: {albumError} <button onClick={refetchAlbum}>Reintentar</button></div>;
  if (tracksError) return <div>Error: {tracksError} <button onClick={refetchTracks}>Reintentar</button></div>;

  const album = albumData?.album?.[0];
  const tracks = tracksData?.track || [];
  if (!album) return <div>No se encontró información del álbum.</div>;

  return (
    <DetailContainer>
      <AlbumTitle>{album.strAlbum}</AlbumTitle>
      <p><strong>Artista:</strong> {album.strArtist}</p>
      <p><strong>Año:</strong> {album.intYearReleased}</p>
      <p><strong>Género:</strong> {album.strGenre}</p>
      <p><strong>Descripción:</strong> {album.strDescriptionES || album.strDescriptionEN || 'Sin descripción.'}</p>
      <h3>Canciones del álbum:</h3>
      {tracks.length === 0 ? (
        <p>No se encontraron canciones para este álbum.</p>
      ) : (
        <TrackList>
          {tracks.map((track, idx) => (
            <TrackItem key={track.idTrack} highlight={idx === 0}>
              {track.strTrack} {track.intDuration ? `- ${Math.floor(track.intDuration/60)}:${('0'+(track.intDuration%60)).slice(-2)}` : ''}
            </TrackItem>
          ))}
        </TrackList>
      )}
    </DetailContainer>
  );
};

export default SongDetail;

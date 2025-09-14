import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

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
    <div className="song-detail">
      <h2>{album.strAlbum}</h2>
      <p><strong>Artista:</strong> {album.strArtist}</p>
      <p><strong>Año:</strong> {album.intYearReleased}</p>
      <p><strong>Género:</strong> {album.strGenre}</p>
      <p><strong>Descripción:</strong> {album.strDescriptionES || album.strDescriptionEN || 'Sin descripción.'}</p>
      <h3>Canciones del álbum:</h3>
      {tracks.length === 0 ? (
        <p>No se encontraron canciones para este álbum.</p>
      ) : (
        <ul>
          {tracks.map(track => (
            <li key={track.idTrack}>
              {track.strTrack} {track.intDuration ? `- ${Math.floor(track.intDuration/60)}:${('0'+(track.intDuration%60)).slice(-2)}` : ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongDetail;

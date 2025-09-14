import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import SearchBar from './components/SearchBar';
import useFetch from './hooks/useFetch';
import SongDetail from './components/SongDetail';

const App = () => {
  // Estado para la biblioteca personalizada (inicialmente vacía)
  const [library, setLibrary] = useState([]);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Proxy para evitar CORS en desarrollo
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // Construir la URL para buscar álbumes
  const searchUrl = searchTerm ? `${proxyUrl}https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}` : null;
  const { data, loading, error, refetch } = useFetch(searchUrl);

  // Procesar los resultados de la API
  const searchResults = data?.album?.map(album => ({
    id: album.idAlbum,
    titulo: album.strAlbum,
    artista: album.strArtist,
    album: album.strAlbum,
    duracion: album.intYearReleased // No hay duración, se muestra el año
  })) || [];

  useEffect(() => {
    console.log('🎵🎵 ¡La Biblioteca Musical se ha cargado correctamente!');
  }, []);

  useEffect(() => {
    console.log('La biblioteca se actualizó:', library);
  }, [library]);

  // Función para agregar álbum a la biblioteca
  const handleAddToLibrary = (album) => {
    if (!library.some(item => item.id === album.id)) {
      setLibrary([...library, album]);
    }
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={
              <>
                <SearchBar onSearch={setSearchTerm} />
                {loading && searchTerm && <div>Cargando...</div>}
                {error && searchTerm && <div>Error: {error} <button onClick={refetch}>Reintentar</button></div>}
                <Library songs={library} />
                {searchTerm && <SearchResults songs={searchResults} onAdd={handleAddToLibrary} />}
              </>
            } />
            <Route path='/song/:id' element={<SongDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
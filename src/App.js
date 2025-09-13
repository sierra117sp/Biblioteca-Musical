import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';

const App = () => {
  // Estado para la biblioteca personalizada (inicialmente vacía)
  const [library, setLibrary] = useState([]);

  // Estado para resultados de búsqueda (datos ficticios)
  const [searchResults] = useState([
    {
      id: 1,
      titulo: "Bohemia Rhapsody",
      artista: "Queen",
      album: "A night at the Opera",
      duracion: "5:20"
    },
    {
      id: 2,
      titulo: "Hotel California",
      artista: "Eagles",
      album: "Hotel California",
      duracion: "6:30"
    },
    {
      id: 3,
      titulo: "Imagine",
      artista: "Jhon Lennon",
      album: "Imagine",
      duracion: "3:07"
    },
    {
      id: 4,
      titulo: "Written In The Stars",
      artista: "Erick Turner",
      album: "Written in The Stars",
      duracion: "4:03"
    },
    {
      id: 5,
      titulo: "Mi corazon encantado",
      artista: "Adrian Barba",
      album: "DBZ",
      duracion: "4:15"
    },
    {
      id: 101,
      titulo: "Stairway to Heaven",
      artista: "Led Zeppelin",
      album: "Led Zeppelin IV",
      duracion: "8:02"
    },
    {
      id: 102,
      titulo: "Smells Like Teen Spirit",
      artista: "Nirvana",
      album: "Nevermind",
      duracion: "5:01"
    }
  ]);

  useEffect(() => {
    console.log('🎵🎵 ¡La Biblioteca Musical se ha cargado correctamente!');
  }, []);

  useEffect(() => {
    console.log('La biblioteca se actualizó:', library);
  }, [library]);

  // Función para agregar canción a la biblioteca
  const handleAddToLibrary = (song) => {
    if (!library.some(item => item.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  return (
    <div className='App'>
      <Header />
      <main className='main-content'>
        <Library songs={library} />
        <SearchResults songs={searchResults} onAdd={handleAddToLibrary} />
      </main>
    </div>
  );
};

export default App;
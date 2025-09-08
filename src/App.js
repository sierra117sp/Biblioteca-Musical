import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';

class App extends Component {
  componentDidMount() {
    console.log('🎵🎵 ¡La Biblioteca Musical se ha cargado correctamente!');
  }
  render() {
    const canciones = [
      {
        id: 1,
        titulo: "Bohemia Rhapsody",
        artista: "Queen",
        album: "A night at the Opera",
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
      }
    ];

    return (
      <div className='App'>
        <Header />

        <main className='main-content'>
          <div className='playlist-header'>
            <h2>Mi Playlist Favorita</h2>
            <p>{canciones.lenght}</p>
          </div>

          <div className='songs-list'>
            {canciones.map(cancion => (
              <Song
              key={cancion.id}
              titulo={cancion.titulo}
              artista={cancion.artista}
              album={cancion.album}
              duracion={cancion.duracion}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
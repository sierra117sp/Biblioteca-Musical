import React, { Component } from 'react';

class Song extends Component {
    render() {
        const { titulo, artista, album, duracion } = this.props;
        return (
            <div className="song-card">
                <div className="song-info">
                    <h3 className='song-title'>{titulo}</h3>
                    <p className='song-artist'>{artista}</p>
                    <p className='song-albun'>{album}</p>
                </div>
                <div className='song-duration'>
                    <span>{duracion}</span>
                </div>
            </div>
        );
    }
}

export default Song;
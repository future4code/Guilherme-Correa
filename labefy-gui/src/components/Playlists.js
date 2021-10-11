import React from 'react';
import styled from 'styled-components';

const ContainerPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid gray;

`


function PLaylists(props) {
    return <ContainerPlaylist>
        <h3>Suas Playlists</h3>
        {this.props.playlist.map((item) => {
            return <div key={item.playlistId}>
                <span>{item.name}</span>
                <button 
                    onClick={() => props.deletePlaylist(item.playlistId)}>Deletar</button>
              </div>
        })}  
    </ContainerPlaylist>
}
export default PLaylists
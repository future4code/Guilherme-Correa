import React from 'react';
import styled from 'styled-components';

const ContainerPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid gray;

`


function CriarPlaylist(props) {
    return (
        <ContainerPlaylist>
          <h3>Crie sua Playlist Aqui</h3>
          <input 
            placeholder='Digite o nome da Playlist' 
            value={props.name}
            onChange={props.onChangeNome}

          />
          <button
            onClick={props.createPlaylist}>Criar</button>
        </ContainerPlaylist>
    )
}
export default CriarPlaylist
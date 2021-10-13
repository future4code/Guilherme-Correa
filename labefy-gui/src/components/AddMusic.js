import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import AddNewMusic from '../img/play_circle_outline_black.svg';
import AddMusicPic from '../img/add_circle_black.svg';

const ContainerAddMusic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`
const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    h2 {
        padding-left: 10px;
    }
`
const Formulario = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    /* border: 1px solid gray; */
    padding: 5px;
    span {

    }
    input {
        border: 1px solid gray;
        background-color: #006261;
        text-decoration: none;
        box-sizing: border-box;
        outline: 0;
        box-shadow: 0;
        color: #fff;
        margin: 5px;
        padding: 7px 15px 7px 15px;
        border-radius: 25px;
        flex-grow: 1;
    }
    input::placeholder {
      color: #fff;
    }
`
const BotaoEnviar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
        height: 50px;
    }
    img:hover {
        filter: invert(25%); 
    }
    img:active {
        filter: invert(25%);
    }
`

class AddMusic extends React.Component {
    state = {
        name: '',
        artist: '',
        url: '',
        plalistName: '',
    }

    addTrackToPlaylist = async(playlistId) => {
        const src = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name: this.state.name, 
            artist: this.state.artist,
            url: this.state.url
        }
        try {
            const response = await axios.post(src, body, {
                headers: {
                    "Authorization": 'guilherme-correa-banu'
                }
            })
            this.setState({playlist: response.data.result.list})
            console.log('resposta axios', response.data)
            console.log('deu certo!')
            
        } catch (error) {
            console.log(error.response)
            console.log('deu rum!')
        }
    }
    
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangeArtist = (e) => {
        this.setState({artist: e.target.value})
    }
    onChangeUrl = (e) => {
        this.setState({url: e.target.value})
    }
    onChangePlalistName = (e) => {
        this.setState({plalistName: e.target.value})
    }

    render(){
        return (
            <ContainerAddMusic>
                <Titulo>
                    <img src={AddNewMusic} alt='Adicionar Musica'/><h2>Adicionar música na playlist</h2>
                </Titulo>
                <Formulario>
                    <span>Nome da Playlist:</span>
                    <input
                        type="text" name="plalistName" id="plalistName" 
                        placeholder='...'
                        size="20"
                        value={this.state.plalistName}
                        onChange={this.onChangePlalistName}
                    />
                    
                    <span>Artista ou Banda:</span>
                    <input
                        type="text" name="artist" id="artist" 
                        placeholder='...'
                        size="20"
                        value={this.state.artist}
                        onChange={this.onChangeArtist}
                    />
                    <span>Nome da Música:</span>
                    <input
                        type="text" name="name" id="name"
                        placeholder='...'
                        size="30"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <span>Link da Música:</span> 
                    <input 
                        type="url" name="url" id="url"
                        placeholder="https://example.com"
                        size="30"
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                    />
                </Formulario>
                <BotaoEnviar>
                    <img 
                        alt='Adicionar Playlist'
                        src={AddMusicPic}
                    />
                </ BotaoEnviar>
            </ContainerAddMusic>
        )
    }
}
export default AddMusic
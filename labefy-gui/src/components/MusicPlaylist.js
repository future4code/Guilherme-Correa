import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import SuaPlaylist from '../img/queue_music_black.svg'

const ContainerMusicas = styled.div`
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
const HeaderMusic = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 2fr ;
    column-gap: 5px;
    border-bottom: 1px solid #b2b2b2;
    color: #b2b2b2;
    padding: 5px;

`
const ListMusic = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 2fr ;
    column-gap: 5px;
    border-bottom: 1px solid #b2b2b2;
    color: #848484;
    padding: 5px;

`


class MusicPlaylist extends React.Component {
    state = {
        tracks: []
    }

    getPlaylistTracks = async(playlistId) => {
        const src = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        
        try {
            const response = await axios.get(src, {
                headers: {
                    "Authorization": 'guilherme-correa-banu'
                }
            })
            this.setState({tracks: response.data.result.tracks})
            console.log('resposta axios musicplalist', response.data)
            console.log('deu certo!')
        } catch (error) {
            console.log(error.response)
            console.log('deu rum!')
        }
    }
    render(){
        return (
            <ContainerMusicas>
                <Titulo>
                    <img alt='SuasMusicas' src={SuaPlaylist} /><h2>Suas Músicas</h2>
                </Titulo>
                <HeaderMusic>
                    <span>#</span>
                    <span>Nome</span>
                    <span>Artista | Banda</span>
                    <span>Url</span>
                </HeaderMusic>
                <ListMusic>
                    <span>1</span>
                    <span>Paradise</span>
                    <span>Coldplay</span>
                    <span>Url</span>

                    <span>2</span>
                    <span>Paradise</span>
                    <span>Coldplay</span>
                    <span>Url</span>
                </ListMusic>

            </ContainerMusicas>
        )
    }
}
export default MusicPlaylist
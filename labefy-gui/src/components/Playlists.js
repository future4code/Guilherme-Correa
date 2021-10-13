import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import SuaPlaylist from '../img/queue_music_black.svg'
import Delete from '../img/clear_white.svg'
import ReadMore from '../img/read_more_white.svg'

const ContainerPlaylist = styled.div`
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
const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 5px;
    padding: 7px 15px 7px 15px;

    border: 1px solid gray;
    border-radius: 25px;
    background-color: #006261;
    color: #fff;
    span {
        flex-grow: 1;
    }
    img {
        height: 30px;
        margin-left: 10px;
    }
    img:hover {
        filter: invert(85%); 
    }
    img:active {
        filter: invert(85%);
    }
`
class PLaylists extends React.Component {
    state = {
        playlist: [],
    };
    componentDidMount = () => {
        this.getAllPlaylists()
    };

    getAllPlaylists = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        try {
            const response = await axios.get(url, {
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
    };

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url, {
            headers: {
              Authorization: "guilherme-correa-banu"
            }
        })
        .then((response) => {
            this.setState({playlist: response.data})
            alert('Playlist deletada com Sucesso!')
            console.log('response', response.data)
        })
        .catch((error) => {
            alert('Não foi possível deletar a Playlist!')
            console.log(error.response.data)
        });
    };

    render(){
        return (
            <ContainerPlaylist>
                <Titulo>
                    <img alt='SuaPlaylist' src={SuaPlaylist} /><h2>Suas Playlists</h2>
                </Titulo>
                
                {this.state.playlist.map((item) => {
                    return <Item key={item.playlistId}>
                        <span>
                            {item.name}
                        </span>
                        <img 
                            alt="Detalhes"
                            src={ReadMore}
                        />
                        <img 
                            alt="Excluir"
                            src={Delete}
                            onClick={() => this.deletePlaylist(item.playlistId)}
                        />
                    </Item>
                })}
            </ContainerPlaylist>
        )
    }
}
export default PLaylists
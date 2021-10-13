import React from 'react';
import styled from 'styled-components';

import Home from './Home';
import CriarPlaylist from './CriarPlaylist';
import PLaylists from './Playlists';
import AddMusic from './AddMusic';
import MusicPlaylist from './MusicPlaylist'

import HomePic from '../img/home_black.svg'
import PLaylistsPlay from '../img/playlist_play_black.svg';
import PlaylistAdd from '../img/playlist_add_black.svg';
import MusicPic from '../img/play_circle_filled_black.svg';
import AddMusicPic from '../img/add_circle_black.svg';


const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vw;
    background-color: #d2d2d2;
`
const ContainerLateral = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 10px;
    border-right: 1px solid gray;
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        img {
            height: 30px;
            padding-right: 3px;
        }
    }
    div:hover {
        filter: invert(25%);
        font-weight: bolder;
        img {
            filter: invert(25%);
        }
    }
`
const ContainerMeio = styled.div`
    margin: 10px;
    flex-grow: 1;
`

class Main extends React.Component {
    state = {
        telaAtual: 'Home',
    }
    onChangePagina = () => {
        switch (this.state.telaAtual) {
            case 'Home':
                return <Home />
            case  'Playlist':
                return <PLaylists
                    onChangeCriaPLay={this.onChangeCriaPLay}
                    onChangeAddMusic={this.onChangeAddMusic}
                />
            case 'CriaPlay':
                return <CriarPlaylist 
                    onChangePlaylist={this.onChangePlaylist}
                    onChangeAddMusic={this.onChangeAddMusic}
                />
            case 'SuasMusicas':
                return <MusicPlaylist />
            case  'AddMusic':
                return <AddMusic />
            default:
                return <MusicPlaylist
                    onChangePlaylist={this.onChangePlaylist}
                />
        }
    }
    onChangeHome = () => {
        this.setState({telaAtual: 'Home'})
    }
    onChangeCriaPLay = () => {
        this.setState({telaAtual: 'CriaPlay'})
    }
    onChangePlaylist = () => {
        this.setState({telaAtual: 'Playlist'})
    }
    onChangeAddMusic = () => {
        this.setState({telaAtual: 'AddMusic'})
    }
    onChangeSuasMusicas = () => {
        this.setState({telaAtual: 'SuasMusicas'})
    }

    render(){
        return (
            <ContainerMain>
                <ContainerLateral>
                    <div onClick={this.onChangeHome}>
                        <img alt='Home' src={HomePic} /><span>Ínicio</span>
                    </div>
                    <div onClick={this.onChangePlaylist}>
                        <img alt='Playlist' src={PLaylistsPlay} /><span>Suas Playlists</span>
                    </div>
                    <div onClick={this.onChangeCriaPLay}>
                        <img alt='AddPlaylist' src={PlaylistAdd} /><span>Criar Playlist</span>
                    </div>
                    <div onClick={this.onChangeSuasMusicas}>
                        <img alt='Music' src={MusicPic} /><span>Suas Músicas</span>
                    </div>
                    <div onClick={this.onChangeAddMusic}>
                        <img alt='AddMusic' src={AddMusicPic} /><span>Adicionar Músicas</span>
                    </div>
                </ContainerLateral>
                <ContainerMeio>
                    <div>{this.onChangePagina()}</div>
                </ContainerMeio>
            </ContainerMain>
        )
    }
}
export default Main
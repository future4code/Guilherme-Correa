import React from 'react';
import './index.css';
import axios from 'axios'
import CriarPlaylist from './components/CriarPlaylist';
import styled from 'styled-components';
import PLaylists from './components/Playlists';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 30vw;
  margin-right: 30vw;
  button {
    margin: 5px;
  }
`
class App extends React.Component {
  state = {
    quantidadePlaylist: 0,
    playlist: [],
    playlistId: '',
    name: '',
    list: [],
    quantity: 0,
    mudarPagina: false,
    paginaPlay: false,
  }
  createPlaylist = () => {
    const body = {
      name: this.state.name
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        "Authorization": 'guilherme-correa-banu'
      }
    }).then((response) => {
      console.log(response.data)
      console.log('deu certo!')
      alert('Playlist criada com Sucesso!')
    }).catch((error) => {
      console.log(error.response.data)
      console.log('deu rum!')    
    })
    this.setState({
      name: ""
    })
  };
  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        "Authorization": 'guilherme-correa-banu'
      }
    }).then((response) => {
      this.setState({playlist: response.data})
      console.log(response.data)
      console.log('deu certo!')
    }).catch((error) => {
      console.log(error.message)
      console.log('deu rum!')    
    })
  };

  deletePlaylist = (playlistId) => {
    let delPlaylist = window.confirm("Tem certeza de que deseja deletar?")

    if (delPlaylist) {
      let filterRemove = this.state.playlist.filter(item => item.playlistId !== playlistId)

      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
        headers: {
          Authorization: "guilherme-correa-banu"
        }
      })
      .then(() => {
        this.setState({usuarios: filterRemove})
        alert('Playlist deletada com Sucesso!')
      })
      .catch((error) => {
        alert('Não foi possível deletar a Playlist!')
        console.log(error.message)
      });
    }
  };

  componentDidMount = () => {
    this.getAllPlaylists()
  }
  onChangeNome = (e) => {
    this.setState({name: e.target.value})
  };
  onChangePagina = () => {
    this.setState({mudarPagina: !this.state.mudarPagina})
  }
  // onChangePaginaPlay = () => {
  //   this.setState({paginaPlay: !this.state.paginaPlay})
  // }
  render() {
    const renderPagina = () => {
      if (this.state.mudarPagina) {
        return <CriarPlaylist 
          name={this.state.name}
          onChangeNome={this.onChangeNome}
          createPlaylist={this.createPlaylist}
        />
      } else {
        return <PLaylists 
          playlist={this.state.playlist}
          deletePlaylist={this.deletePlaylist}
        />
      }
    };
    // const renderPLaylist = () => {
    //   if (this.state.paginaPlay) {
    //     return renderPagina()
    //   } else {
    //     <PLaylists 
    //       playlist={this.state.playlist}
    //     />
    //   }
    // };
    return (
      <ContainerApp>
        <h1>Labefy - GuiPazini</h1>
        {renderPagina()}
        {/* {renderPLaylist()} */}
        <button
          onClick={this.onChangePagina}>Playlists</button>
        {/* <button
          onClick={this.onChangePaginaPlay}>Playlists</button> */}
      </ContainerApp>
    )
  }
}
export default App;

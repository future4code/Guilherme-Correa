import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import CriarUser from './components/CriarUser';
import ListaUsers from './components/ListaUsers'

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30vw;
  margin-right: 30vw;
`

class App extends React.Component {
  state = {
  usuarios: [],
  name: "",
  email: "",
  id: "",
  pagina: true,
  pagina2: true,
  };

  criarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "guilherme-correa-banu"
      }
    }
    ).then((response) => {
      alert('Dados Enviados com Sucesso!')
      console.log(response.data)
    })
    .catch((error) => {
      alert('Erro ao enviar, tenten novamente!')
      console.log(error.message)
    });

    this.setState({
      name: ""
    })

    this.setState({
      email: ""
    })
  };

  buscarTodosOsUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "guilherme-correa-banu"
      }
    }
    ).then((response) => {
      this.setState({usuarios: response.data})
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.message)
    });
  };

  deletarUsuario = (id) => {
    let deletar = window.confirm("Tem certeza de que deseja deletar?")

    if (deletar) {
      let filtroDeRemovidos = this.state.usuarios.filter(item => item.id !== id)

      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: "guilherme-correa-banu"
        }
      })
      .then(() => {
        this.setState({usuarios: filtroDeRemovidos})
        alert('Deletado com Sucesso!')
      })
      .catch((error) => {
        alert('Não foi possível deletar!')
        console.log(error.message)
      });
    }
  };

  burcarUsuario = (id) => {
    let filtroDeDetalhes = this.state.usuarios.filter(item => item.id !== id)

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "guilherme-correa-banu"
      }
    }
    ).then((response) => {
      this.setState({usuarios: filtroDeDetalhes})
      // this.setState({usuarios: response.data})
      console.log('deu certo')
      
    })
    .catch((error) => {
      console.log(error.message)
      console.log('deu ruim')
    });
    // this.onChangePaginaDois()
  };

  componentDidMount = () => {
    this.buscarTodosOsUsuarios()
  };

  // componentDidUpdate = () => {
  //   this.burcarUsuario()
  // };

  onChangeNome = (e) => {
    this.setState({name: e.target.value})
  };

  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  };

  onChangePagina = () => {
    this.setState({pagina: !this.state.pagina})
  }

  onChangePaginaDois = () => {
    this.setState({pagina2: !this.state.pagina2})
  }

  render () {
    const renderizarPagina = () => {
      if (this.state.pagina) {
        return <CriarUser 
            name={this.state.name}
            onChangeName={this.onChangeNome}
            
            email={this.state.email}
            onChangeEmail={this.onChangeEmail}
  
            onClickCriar={this.criarUsuario}
          />
      } else {
          return <ListaUsers
            pagina2={this.state.pagina2}
            usuarios={this.state.usuarios}
            detalheUsuario={this.onChangePaginaDois}
            onClickDelete={this.deletarUsuario}
          />
      }
    };

    return (
      <ContainerApp>
        <h1>Labenusers</h1>
        <button onClick={this.onChangePagina}>Trocar de página</button>
        {renderizarPagina()}<br/>
        <button onClick={this.onChangePagina}>Voltar</button>

      </ContainerApp>

    );
}}
export default App;

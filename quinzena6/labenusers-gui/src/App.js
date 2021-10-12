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
    telaAtual: "cadastro",
  };

  goToCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  goToLista = () => {
    this.setState({telaAtual: "lista"})
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CriarUser 
          goToLista={this.goToLista}
        />
      case "lista":
        return <ListaUsers
          goToCadastro={this.goToCadastro}
      />
      default:
        return <div><p>deu erro</p></div>
    }
  }

  render () {

    return (
      <ContainerApp>
        <h1>Labenusers</h1>
        {this.escolherTela()}
      </ContainerApp>

    );
}}
export default App;

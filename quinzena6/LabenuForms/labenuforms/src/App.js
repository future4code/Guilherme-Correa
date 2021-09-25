import React from 'react';
import styled from 'styled-components';
import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Final from './pages/Final'

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      align-items: center;
    }
`


class App extends React.Component {
  state = {
    etapa: 1,
  }

  proximaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Final />
    }
  };

  passarEtapa = (e) => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render (){

  return (
    <ContainerForm>
      {this.proximaEtapa()}
      {this.state.etapa !== 4 && (
      <button onClick={this.passarEtapa}>Próxima etapa</button>)}
    </ContainerForm>
  );
}}
export default App;

import React from 'react';
import './App.css';


import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';

class App extends React.Component {
  state = {
    etapa1: false,
    etapa2: false,
    etapa3: false,
    final: false
  };

  proximaEtapa1 = () => {
    this.setState({etapa1: true})
  };

  render (){
  return (
    <div className="App">
      <Etapa1 />
    </div>
  );
}
}

export default App;

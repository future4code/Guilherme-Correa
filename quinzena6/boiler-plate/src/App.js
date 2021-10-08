import React from 'react'
import styled from 'styled-components'
// import './styles.css'

const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  
`
const TarefasItens = styled.div`
  display: grid;
  grid-template-columns: 10fr 1fr;
  margin-bottom: 10px;
  border: 1px solid black;
`

class App extends React.Component {
    state = {
      tarefas: [],

      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const salvarDados = () => {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
      console.log('tarefas')
      }
    salvarDados()
  }

  componentDidMount() {
    const buscarDados = () => {
      const novaTarefa = JSON.parse(localStorage.getItem('tarefas'))
      console.log(novaTarefa)
      return novaTarefa
    }
    const dadosSalvos = buscarDados()
    this.setState({tarefas: dadosSalvos})
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completo: false
    };

    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa];
    this.setState({tarefas: novaListaDeTarefas})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa, completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value });
  }

  removendoTarefa = (id) => {
    const novaLista = this.state.tarefas.filter((item) => {
      return item.id !== id;

    })
    this.setState({tarefas: novaLista})
  }

  render() {

    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <ContainerBody>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa, indice) => {
            return (
              <TarefasItens key={indice}>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa> 
                <button onClick={() => this.removendoTarefa(tarefa.id)}>X</button>
              </TarefasItens>
            )
          })}
        </TarefaList>
      </ContainerBody>
    )
  }
}

export default App

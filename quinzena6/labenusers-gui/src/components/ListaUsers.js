import React from "react";
import axios from 'axios';
import styled from "styled-components";

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 310px;
`
const Lista = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 5px;
    width: 100%;
`
class ListaUsers extends React.Component {
    state = {
        usuarios: [],
    }
    componentDidMount = () => {
        this.buscarTodosOsUsuarios()
    };

    buscarTodosOsUsuarios = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: "guilherme-correa-banu"
                }
            })
            this.setState({usuarios: response.data})
        } catch (error) {
            alert('deu rum!')
        }
    };
    
    deletarUsuario = (id) => {
        let deletar = window.confirm("Tem certeza de que deseja deletar?")
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        if (deletar) {
        let filtroDeRemovidos = this.state.usuarios.filter(item => item.id !== id)

        axios.delete(url, {
            headers: {
                Authorization: "guilherme-correa-banu"
            }
        })
        .then(() => {
            alert('Deletado com Sucesso!')
            this.setState({usuarios: filtroDeRemovidos})
        })
        .catch((error) => {
            alert('Não foi possível deletar!')
            console.log(error.response.data)
        });
        }
    };

    render() {
        const listaUsers = this.state.usuarios.map((user) => {
            return (
                <Lista key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>Deletar</button>
                </Lista>
                
            )
        })
        return (
            <ContainerLista>
                    <h2>Lista de Usuário</h2>
                    {listaUsers}
                    <button onClick={this.props.goToCadastro}>Ir para tela de cadastro</button>
            </ContainerLista>
        )
    }
}
export default ListaUsers;
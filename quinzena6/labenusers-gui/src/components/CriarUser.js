import React from "react";
import axios from 'axios';
import styled from "styled-components";

const ContainerCriarUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Caixa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`

 class CriarUser extends React.Component {
    state = {
        name: "",
        email: "",
      };

    criarUsuario = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
          name: this.state.name,
          email: this.state.email,
        };
    
        axios.post(url, body, {
            headers: {
              Authorization: "guilherme-correa-banu"
            }
        })
        .then((response) => {
            alert('Dados Enviados com Sucesso!')
            this.setState({name: "", email: ""})
        })
        .catch((error) => {
            alert(error.response.date.message)
        });
    };

    onChangeNome = (e) => {
        this.setState({name: e.target.value})
    };
    
    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    };

    render() {
        return ( 
            <ContainerCriarUser>
                <h2>Criar Usuário</h2>
                <Caixa>
                        <input 
                            placeholder='Nome' 
                            value={this.props.name}
                            onChange={this.props.onChangeName}
                        />
                        <input 
                            placeholder='E-mail'
                            value={this.props.email}
                            onChange={this.props.onChangeEmail}
                        />
                        <button onClick={this.props.onClickCriar}>Cadastrar</button>
                </Caixa>
                <button onClick={this.props.goToLista}>Ir para lista de usuário</button>
            </ContainerCriarUser>
        )
    }
}
export default CriarUser;




  // burcarUsuario = (id) => {
  //   let filtroDeDetalhes = this.state.usuarios.filter(item => item.id !== id)

  //   axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
  //     headers: {
  //       Authorization: "guilherme-correa-banu"
  //     }
  //   }
  //   ).then((response) => {
  //     this.setState({usuarios: filtroDeDetalhes})
  //     // this.setState({usuarios: response.data})
  //     console.log('deu certo')
      
  //   })
  //   .catch((error) => {
  //     console.log(error.message)
  //     console.log('deu ruim')
  //   });
  // };




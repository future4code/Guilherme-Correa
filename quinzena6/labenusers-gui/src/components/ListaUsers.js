import React from "react";
import axios from 'axios';
import styled from "styled-components";
import DetalhesUser from "./DetalhesUser";


const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    render() {
        return (
            <ContainerLista>
            <h2>Lista de Usuário</h2>
            {this.props.usuarios.map((item) =>{
                return <Lista key={item.id}>
                    <span 
                        onClick={() => this.props.detalheUsuario(item.id)}>{item.name}</span>
                    <button 
                        onClick={() => this.props.onClickDelete(item.id)}>Delete</button>
                </Lista>
            })}
            {/* <button onClick={() => props.onChangePagina()}>Voltar</button> */}
        </ContainerLista>
        )
    }
}
export default ListaUsers;


//  function ListaUsers(props) {
    
//     return ( 
//         <ContainerLista>
//             <h3>Lista de Usuário</h3>
//             {props.usuarios.map((item) =>{
//                 return <Lista key={item.id}>
//                             <span
//                                 onClick={() => props.onClickDetalhes(item.id)}>{item.name}</span>
//                             <button 
//                                 onClick={() => props.onClickDelete(item.id)}>X</button>
//                         </Lista>
//             })}
//             {/* <button onClick={() => props.onChangePagina()}>Voltar</button> */}
//         </ContainerLista>
//     )}
// export default ListaUsers
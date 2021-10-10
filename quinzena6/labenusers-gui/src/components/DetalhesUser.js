import React from "react";
import styled from "styled-components";

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
    width: 80%;
    span {
        flex-grow: 1;
        margin-right: 3px;
    }
    button {
        margin-right: 3px;
    }
`
 function DetalhesUser(props) {
    
    return ( 
        <ContainerLista>
            <h3>Detalhes do Usuário</h3>
            {props.usuarios.length === 0 ? null: props.usuarios.map((item) =>{
                return <Lista key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <button 
                        onClick={() => this.props.onClickDelete(item.id)}>Deletar</button>
                </Lista>
            })}
        </ContainerLista>
    )}
export default DetalhesUser
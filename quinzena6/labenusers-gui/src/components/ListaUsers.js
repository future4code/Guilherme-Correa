import React from "react";
import styled from "styled-components";
import DetalhesUser from "./DetalhesUser";

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
    width: 80%;
    span {
        flex-grow: 1;
        margin-right: 3px;
    }
    button {
        margin-right: 3px;
    }
`
function ListaUsers(props) {
    
    if (!props.pagina2) {
        return <DetalhesUser
          usuarios={props.usuarios}
          onClickDelete={props.onClickDelete}
        />
    } else {
        return <ContainerLista>
            <h2>Lista de Usuário</h2>
              {props.usuarios.map((item) =>{
                return <Lista key={item.id}>
                    <span>{item.name}</span>
                    <button 
                        // onClick={() => props.detalheUsuario(item.id)}>Mais</button>
                        onClick={() => props.detalheUsuario(item.id)}>Mais</button>
                    <button 
                        onClick={() => props.onClickDelete(item.id)}>Deletar</button>
                </Lista>
            })}
        </ContainerLista>
    }
}
export default ListaUsers;


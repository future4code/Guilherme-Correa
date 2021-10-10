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
    width: 100%;

`
 function DetalhesUser(props) {
    
    return ( 
        <ContainerLista>
            <h3>Detalhes do Usuário</h3>
            {props.usuarios.map((item) =>{
                return <Lista key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.email}</span>
                            <button >X</button>
                        </Lista>
            })}
        </ContainerLista>
    )}
export default DetalhesUser
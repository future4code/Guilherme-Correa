import React from "react";
import styled from "styled-components";

const ContainerCriarUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    
`

const Caixa = styled.div`
    display: flex;
    flex-direction: row;
`

const Campo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px;
    input {
        margin-bottom: 3px;
    }
`
 function CriarUser(props) {
    return ( 
        <ContainerCriarUser>
            <h2>Criar Usuário</h2>
            <Caixa>
                <Campo>
                    <input 
                        placeholder='Nome' 
                        value={props.name}
                        onChange={props.onChangeName}
                    />
                    <input 
                        placeholder='E-mail'
                        value={props.email}
                        onChange={props.onChangeEmail}
                    />
                </Campo>
                <button onClick={props.onClickCriar}>Criar</button>
            </Caixa>
        </ContainerCriarUser>
    )}
export default CriarUser
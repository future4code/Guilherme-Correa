import React from "react";
import styled from "styled-components";

const ContainerCriarUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

 function CriarUser(props) {
    return ( 
        <ContainerCriarUser>
            <h2>Criar Usuário</h2>
            <div>
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
                <button onClick={props.onClickCriar}>Criar</button>
            </div>
        </ContainerCriarUser>
    )}
export default CriarUser
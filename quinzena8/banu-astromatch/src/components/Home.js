import React from "react"
import styled from "styled-components"
import { useState } from 'react';
import BemVindo from '../img/bemvindo.png'
import Enviar from '../img/send_white.svg'

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
    color: #1f2050;
    span {
        padding: 5px;
    }
    #Bem-Vindo {
        width: 95%;
        padding: 10px;
    }
`
const EnviarNome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    padding: 7px 15px 7px 15px;
    border: 1px solid gray;
    border-radius: 25px;
    border-color: #1f2050;
    background-color: #1f2050;
    text-decoration: none;
    width: 85%;

    input {
        border: none;
        border-color: #1f2050;
        background-color: #1f2050;
        text-decoration: none;
        box-sizing: border-box;
        outline: 0;
        box-shadow: 0;
        color: #fff;
        width: 100%;
    }
    input::placeholder {
        color: #fff;
    }
    #send {
        height: 30px;
        margin-left: 10px;
    }
    #send:hover {
        filter: invert(55%); 
    }
    #send:active {
        filter: invert(55%);
    }
`
function Home (props) {
    const [name, setName] = useState('')

    const onChangeName = (ev) => {
        setName(ev.target.value)
        localStorage.setItem("usuario", ev.target.value)
    }
    return (
        <ContainerHome>
            <span>Vamos começar nosso <b>AstroMatch</b>, e ver qual espacial combina mais com você.</span>
            <span>Para começarinsira seu <b>PRIMEIRO NOME</b> no campo abaixo.</span>
            <img src={BemVindo} alt='Bem-Vindo' id='Bem-Vindo'/>
            <EnviarNome>
                <input placeholder='Seu nome...'
                    value={name}
                    onChange={onChangeName}
                />
                <img src={Enviar} 
                    alt='Enviar Nome'
                    id='send'
                    onClick={() => {props.onChangePage('profile')}}
                />
            </EnviarNome>
        </ContainerHome>
    )
}
export default Home
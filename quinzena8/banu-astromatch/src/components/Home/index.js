import {ContanierHome, ContainerTexto, ContainerSend} from './style.js'
import BemVindo from '../../img/bemvindo.png'
import Enviar from '../../img/send_white.svg'
import { useState } from "react";

function Home(props) {
    const [name, setName] = useState('')

    const onChangeName = (ev) => {
        setName(ev.target.value)
        localStorage.setItem("usuario", ev.target.value)
    }
    return (
        <ContanierHome>
            <ContainerTexto>
                <span>Bem-Vindo(a) ao <b>AstroMatch</b>,</span>
                <img src={BemVindo} alt='Bem-Vindo' id='Bem-Vindo'/>
                <span>Para começar, insira seu <b>NOME</b> abaixo e vamos a procura do seu(sua) <b>CRUSH SPACIAL</b>.</span>
            </ContainerTexto>
            <ContainerSend>
                <input placeholder='Seu nome...'
                    value={name}
                    onChange={onChangeName}
                />
                <img src={Enviar} 
                    alt='Enviar Nome'
                    id='send'
                    onClick={() => {props.onChangePage('profile')}}
                /> 
            </ContainerSend>
        </ContanierHome>
    )
}
export default Home;
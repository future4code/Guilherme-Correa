import {ContainerPrincipalGeral, ContainerTripFromPage, ContainerFormTrip} from './style'
import { useNavigate } from "react-router-dom";
import { useState } from 'react/cjs/react.development';

// IMG
import IconBack from '../img/undo_white_48dp.svg'


export const CreateTripPage = () => {
    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [durationInDays, setDurationInDays] = useState('')

    const navigate = useNavigate();

    const onClickEnviar = () => {
    }
    const onClickName = (ev) => {
        setName(ev.target.value)
    }
    const onClickPlanet = (ev) => {
        setPlanet(ev.target.value)
    }
    const onClickDate = (ev) => {
        setDate(ev.target.value)
    }
    const onClickDescription = (ev) => {
        setDescription(ev.target.value)
    }
    const onClickDurationInDays = (ev) => {
        setDurationInDays(ev.target.value)
    }
    return(
        <ContainerTripFromPage>
            <ContainerFormTrip>
                <form onSubmit={onClickEnviar}>
                    <input placeholder='Nome'
                        name={name}
                        value={name} 
                        type="text"
                        onChange={onClickName} 
                        required
                    />
                    <select name={planet} id="planet" value={planet} onChange={onClickPlanet}>
                        <option>Escolha um Planeta</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                    </select>
                    <input placeholder='Data'
                        name={date}
                        value={date} 
                        type="date"
                        onChange={onClickDate} 
                        required
                    />
                    <input placeholder='Descrição'
                        name={description}
                        value={description} 
                        type="text"
                        onChange={onClickDescription} 
                        required
                    />
                    <input placeholder='Duração em dias'
                        name={durationInDays}
                        value={durationInDays} 
                        type="number"
                        onChange={onClickDurationInDays} 
                        required
                    />
                    <button>Enviar</button>
                </form>
            </ContainerFormTrip>
            <ContainerPrincipalGeral>
                <h1>Criar Viagem</h1>
                <div>
                    <img src={IconBack} alt='Voltar'
                        onClick={() => navigate(-2)} />
                </div>
            </ContainerPrincipalGeral>
        </ContainerTripFromPage>
    )
}   
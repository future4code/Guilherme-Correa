import {CardCandidato, ContainerButton} from './style'
import { useState, useEffect } from "react"
import axios from 'axios'
import {BASE_URL_API} from '../../constants/URL_API'

export const CandidatesCard = (props) => {
    const [decide, setDecide] = useState(false)
    const traveler = props.candidates
    console.log("Candidatos", traveler)

    const decideCandidate = (id) => {
        const body = {
            aprove: decide
        }

        axios
        .put(`${BASE_URL_API}guilherme-banu/trips/${id}/apply`, body,
        {
            headers: {auth:localStorage.getItem('token')}
        })
        .then((response) => {
            console.log("decide", response.data)
            setDecide(true)
        })
    }

    const onClickDecide = () =>{
        decideCandidate()
    }




    return (
        <div>
            {traveler && traveler.candidates && traveler.candidates.map((data) => {
                return (
                    <CardCandidato key={data.id}>
                        <div>
                            <span>Nome: </span><span class="conteudo">{data.name}</span>
                        </div>
                        <div>
                            <span>Profissão: </span><span class="conteudo">{data.profession}</span>
                        </div>
                        <div>
                            <span>Idade: </span><span class="conteudo">{data.age} anos</span>
                        </div>
                        <div>
                            <span>País: </span><span class="conteudo">{data.country}</span>
                        </div>
                        <div class="description">
                            <span>Texto de Candidatura: </span><span class="conteudo">{data.applicationText}</span>
                        </div>
                        <ContainerButton>
                            <button onClick={onClickDecide}>Aprovar</button>
                            <button>Reprovar</button>
                        </ContainerButton>
                    </CardCandidato>
                )
            })}
        </div>
    )
}
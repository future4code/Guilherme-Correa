import {ContainerMatches, CardMatch, PhotoCard} from './style.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {urlAstroMatch} from '../../constants/url'
import IconCard from '../../img/icon_chat.svg'

function Matchs() {
    const [matches, setMatches] = useState([])

    const getMatches = async () => {
        try {
            const newName = localStorage.getItem("usuario")
            const response = await axios
            .get(`${urlAstroMatch}/astroMatch/${newName}/matches`)
            setMatches(response.data.matches)
        }
        catch(err) {
        }
    }
  
    useEffect(
        getMatches, []
    )

    return (
        <ContainerMatches>
            {matches.map((match) => {
                return (
                    <CardMatch key={match.id}>
                        <PhotoCard 
                            photoBack={match.photo} />
                        <span>{match.name}</span>
                        <img src={IconCard} 
                            alt='Chat'
                            id='IconCard'
                        />
                    </CardMatch>
                )
            })}
        </ContainerMatches>
    )
}
export default Matchs;
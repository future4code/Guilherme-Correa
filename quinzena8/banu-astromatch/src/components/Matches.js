import React from "react"
import styled from "styled-components"
import axios from 'axios';
import { useEffect, useState } from 'react';
import {urlAstroMatch} from '../constants/url'

const ContainerMatches = styled.div`
  display: flex;
  flex-direction: column;
`
const CardMatch = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 40px;
    height: auto;
    border-radius: 20px
  }
`

function Matches () {
  const [matches, setMatches] = useState([])

  const getMatches = async () => {
    try {
      const newName = localStorage.getItem("usuario")
      const response = await axios
        .get(`${urlAstroMatch}/astroMatch/${newName}/matches`)
        console.log(response.data)
        setMatches(response.data.matches)
    }
    catch(err) {
      console.log('deu ruim', err.date )
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
          <img src={match.photo} alt={match.name}></img>
          <h3>{match.name}, {match.age}</h3>
        </CardMatch>
        )
      })}
    </ContainerMatches>
  )
}
export default Matches;
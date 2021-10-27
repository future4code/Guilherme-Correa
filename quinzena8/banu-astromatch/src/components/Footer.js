import React from "react"
import styled from "styled-components"
import axios from 'axios';
import {urlAstroMatch} from '../constants/url'
import { useState } from 'react';
import Like from '../img/astro_like.png'
import noLike from '../img/astro_nolike.png'

const ContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    img {
        width: 70px;
        padding: 0 10px 0 10px;
    }
    img:hover{
        filter: invert(20%); 
    }
    img:active{
        filter: invert(25%); 
    }
`
function Footer (props) {
    const [choice, setChoice] = useState(false)
    const choosePerson = async () => {
        const body = {
          id: props.profile.id,
          choice: choice,
        }
        try {
          const response = await axios
            .post(`${urlAstroMatch}/astroMatch/guilherme/choose-person`, body)
        }
        catch(err) {
        }
    }
    const onClickChoose = async (choice) => {
        setChoice(choice)
        await choosePerson()
        props.getProfileToChoose()
    }
    return (
        <ContainerFooter>
            <img src={Like} alt='Gostei' 
                onClick={() => {onClickChoose(true)}} />
            <img src={noLike} alt='Não Gostei' 
                onClick={() => {onClickChoose(false)}} />
        </ContainerFooter>
    )
}
export default Footer;
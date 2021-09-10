import React from 'react';
// import './CardPequeno.css'
import styled from 'styled-components'

const CardPeq = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 40px;
`

const ImgCardPequeno = styled.img`
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;
`

const ConteudoCardDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
`

function CardPequeno(props) {
    return (
        <CardPeq>
            <ImgCardPequeno src={ props.imagem } />
            <ConteudoCardDiv>
                <h4>{ props.titulo }</h4> 
                <p>{ props.dados }</p>
            </ConteudoCardDiv>
        </CardPeq>
    )
}

export default CardPequeno;
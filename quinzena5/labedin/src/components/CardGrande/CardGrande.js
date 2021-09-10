import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const CardeGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImgCardGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const ConteudoCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const CardH4 = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <CardeGrande>
            <ImgCardGrande src={ props.imagem } />
            <ConteudoCardDiv>
                <CardH4>{ props.nome }</CardH4>
                <p>{ props.descricao }</p>
            </ConteudoCardDiv>
        </CardeGrande>
    )
}

export default CardGrande;
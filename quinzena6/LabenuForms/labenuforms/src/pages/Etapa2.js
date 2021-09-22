import React, { Component } from 'react';
import Styled from 'styled-components'

const ContainerEtapa2 = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`



class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerEtapa2>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <ol>
                    <li>Qual o curso?</li>
                    <input type='text'name='curso'id='curso' />
                    <li>Qual a unidade de ensino?</li>
                    <input type='text'name='unidadeDeEnsino'id='unidadeDeEnsino' />
                </ol>
                <button type='submit' id='proximaEtapa'>Próxima etapa</button>
            </ContainerEtapa2>
        )
    }
}
export default Etapa2
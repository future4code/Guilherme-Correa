import React from 'react'
import Styled from 'styled-components'

const ContainerForm = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
        padding: 10px;
        align-items: center;
        text-align:center;
    }
`

class Etapa1 extends  React.Component {
    render () {
        return (
            <ContainerForm>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <ol>
                    <li>Qual o seu Nome?</li>
                    <input type='text'name='nome'id='nome'/>

                    <li>Qual sua idade?</li>
                    <input type='number' name='idade' id='idade'/>

                    <li>Qual sue email?</li>
                    <input type='email' name='email' id='email'/>
                    
                    <li>Qual a sua escolaridade?</li>
                    <input type='text' name='escolaridade' id='escolaridade' list='escolaridade'/>
                        <datalist id="escolaridade"> 
                            <option value='Ensino Médio Incompleto' /> 
                            <option value='Ensino Médio Completo' /> 
                            <option value='Ensino Superior Incompleto' /> 
                            <option value='Ensino Superior Completo' /> 
                        </datalist>
                </ol>
                <button type='submit' id='proximaEtapa'>Próxima etapa</button>
            </ContainerForm>
        )  
    }
}
export default Etapa1
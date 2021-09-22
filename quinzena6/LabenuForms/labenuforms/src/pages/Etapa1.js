import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
        padding: 10px;
    }
`

class Etapa1 extends  React.Component {
    state = {
        etapa1: false,
      };
    
      proximaEtapa1 = () => {
        this.setState({etapa1: true})
      };

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
                    < select id="escolaridade"> 
                        <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                        <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                        <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                        <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                    </select>
                </ol>
                <button 
                ype='submit' 
                id='proximaEtapa'
                onClick={this.state.proximaEtapa1}>Próxima etapa</button>
            </ContainerForm>
        )  
    }
}
export default Etapa1
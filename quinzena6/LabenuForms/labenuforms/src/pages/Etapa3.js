import React from "react";
import Styled from 'styled-components'

const ContainerEtapa3 = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Etapa3 extends React.Component {
    render () {
        return (
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <ol>
                    <li>Por que você não terminou um curso de graduação?</li>
                    <input type='text'name='terminoCurso'id='terminoCurso' />
                    <li>Você fez algum curso complementar?</li>
                    <input type='text'name='curso'id='curso' list='curso'/>
                    <datalist id="curso"> 
                            <option value='Curso técnico' /> 
                            <option value='Cursos de inglês' /> 
                            <option value='Não fiz curso complementar' /> 
                    </datalist>
                </ol>
                <button type='submit' id='proximaEtapa'>Próxima etapa</button>
            </div>
        )
    }
}
export default Etapa3
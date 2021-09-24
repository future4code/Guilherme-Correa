import React from "react";
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
            </div>
        )
    }
}
export default Etapa3
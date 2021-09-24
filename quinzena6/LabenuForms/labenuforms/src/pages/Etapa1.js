import React from 'react'
class Etapa1 extends  React.Component {
    render () {
        return (
            <div>
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
            </div>
        )  
    }
}
export default Etapa1
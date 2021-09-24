import React from 'react';

class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <ol>
                    <li>Qual o curso?</li>
                    <input type='text'name='curso'id='curso' />
                    <li>Qual a unidade de ensino?</li>
                    <input type='text'name='unidadeDeEnsino'id='unidadeDeEnsino' />
                </ol>
            </div>
        )
    }
}
export default Etapa2
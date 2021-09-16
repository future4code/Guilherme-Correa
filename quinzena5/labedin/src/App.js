import React from 'react';
// import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Gpazini from './img/gpazini.jpg';
import Email from './img/email.png';
import Adress from './img/adress.png';
import Seta from './img/seta.png';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`
const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const PageSectionContainerH3 = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`
const Dadosh2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <AppDiv>
      <PageSectionContainer>
        <Dadosh2>Dados pessoais</Dadosh2>
        <CardGrande 
          imagem={Gpazini} 
          nome="Guilherme Pazini" 
          descricao="Oi, eu sou o Guilherme Pazini. Sou formado em Relações Públicas e aluno da Labenu. Sou um amante da comunicação e estou buscando na programação Front end um novo caminho para me inserir no mercado"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          imagem={Email} 
          titulo="E-mail:&nbsp;" 
          dados="pazini.guilherme@gmail.com"
        />

        <CardPequeno
          imagem={Adress} 
          titulo="Endereço:&nbsp;"
          dados="Rua Tenente Seb. Soares, 231 - SP" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Dadosh2>Experiências profissionais</Dadosh2>
        <CardGrande 
          imagem={Seta} 
          nome="Analista de Relacionamento" 
          descricao="Responsável pelo contato comercial e relacionamento B2B entra afarmacêutica e os PDVs." 
        />
        
        <CardGrande 
          imagem={Seta}  
          nome="Assistente Administrativo" 
          descricao="Realização de assistência a diretoria e a equipe de gestão do Hospital SanctaMaggiore. Coordenação e orientação das equipes administrativas operacionais dohospital."
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Dadosh2>Minhas redes sociais</Dadosh2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppDiv>
  );
}

export default App;

import React from "react"
import styled from "styled-components"
import AstroMatchLogo from '../img/logo_astromatch.png'
import IconVoltar from '../img/icon_back.png'
import IconMatchs from '../img/icon_matchs.png'

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  #astroMatchLogo {
    width: 55%;
    padding-bottom: 5px;
  }
  #AstroBack {
    width: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }
  #AstroBack:hover{
    filter: invert(25%); 
  }
  #AstroBack:active{
    filter: invert(25%); 
  }
`
function Header (props) {
  return (
    <ContainerTitle>
      <img src={IconMatchs} 
        alt='Matchs' 
        id='AstroBack'
        onClick={() => props.onChangePage('match')}
      />
      <img src={AstroMatchLogo} 
        alt='Logo Astromatch' 
        id='astroMatchLogo'
      />
      <img src={IconVoltar} 
        alt='profile' 
        id='AstroBack'
        onClick={() => props.onChangePage('profile')}
      />
    </ContainerTitle>
  )
}
export default Header
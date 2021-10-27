import React from "react"
import styled from "styled-components"
import axios from 'axios';
import {urlAstroMatch} from '../constants/url'
import Footer from './Footer'
import IconClear from '../img/icon_clear.svg'

const ContainerProfile = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  
  #ClearIcon {
    width: 30px;
    padding-left: 90%;
    padding-right: 10px;
  }
  #ClearIcon:hover{
    filter: invert(25%); 
  }
  #ClearIcon:active{
    filter: invert(25%); 
  }
`
const CardProfile = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.fotoBackground})`};
  background-position: center;
  background-size: cover;
  align-items: flex-end;
  border-radius: 10px;


  /* display: inline-block;
  position: relative;
  color: white; */
  img {
    position: absolute;
    width: 100%;
    height: auto;
  }
  h3 {
    position: absolute;
    top: 47vh;
    left: 5px;
    font-size: 30px;
    background-color: #fe1a89;
    box-shadow: 0px 1px 3px black;
    padding: 2px 3px 2px 3px;
    margin: 5px
  }
  span {
    position: absolute;
    top: 55vh;
    left: 5px;
    font-size: 14px;
    background-color: #fe1a89;
    box-shadow: 0px 1px 3px black;
    padding: 2px 3px 2px 3px;
    margin: 5px
  }
`
function Profiles (props) {
  const clearChooses = async () => {
    try {
      const newName = localStorage.getItem("usuario")
      const response = await axios
        .put(`${urlAstroMatch}/astroMatch/${newName}/clear`)
    }
    catch(err) {
    }
    props.getProfileToChoose()
  }
  
  return (
    <ContainerProfile 
      key={props.profile.id}>
      <CardProfile  fotoBackground={props.profile.photo}>
        <img src={props.profile.photo} alt={props.profile.name} />
        <h3>{props.profile.name}, {props.profile.age}</h3>
        <h2>{props.profile.age}</h2>
        <span>{props.profile.bio}</span>
      </CardProfile>
      <img src={IconClear} 
        alt='Limpar Match' 
        id='ClearIcon'
        onClick={clearChooses}
      />
    </ContainerProfile>
  )
}
export default Profiles;
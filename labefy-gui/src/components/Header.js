import React from 'react';
import styled from 'styled-components';
import ImgPLay from '../img/playbuttonclear.svg';

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: #001e26;
  width: 100vw;
  color: #d4dfe0;
  padding: 10px;
  img {
    width: 50px;
  }
  h1 {
    padding-left: 10px;
  }
`
class Header extends React.Component {
    render(){
        return (
            <ContainerHeader>
                <img src={ImgPLay} alt='Play'/>
                <h1>LabefyMusic</h1>
            </ContainerHeader>
        )
    }
}
export default Header
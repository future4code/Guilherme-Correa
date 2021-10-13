import React from 'react';
import styled from 'styled-components';
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/twitter.png'

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: #001e26;
  width: 100vw;
  color: #d4dfe0;
  padding: 10px;
  font-size: small;

  position: fixed;
  bottom: 0;
  width:100%;

  img {
      height: 25px;
      padding-left: 20px;
      filter: invert(25%);
  }
`
class Footer extends React.Component {
    render(){
        return (
            <ContainerFooter>
                <span>O melhor site de streaming para você criar sua playlist - LabefyMusic © - 2021</span>
                <div>
                    <img src={Facebook} />
                    <img src={Instagram} />
                    <img src={Twitter} />
                </div>
            </ContainerFooter>
        )
    }
}
export default Footer
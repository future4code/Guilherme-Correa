import React from 'react';
import styled from 'styled-components';

import HomePage from '../img/home.jpg'

const HomePageGeral = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px
`

class Home extends React.Component {
    render(){
        return (
            <HomePageGeral>
                <img src={HomePage} alt='Home' />
            </HomePageGeral>
        )
    }
}
export default Home
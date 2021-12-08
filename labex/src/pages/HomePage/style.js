import styled from "styled-components";
import BackPlanet from '../../assets/universo.jpg'

export const ContainerHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 5px;
    }
`
export const ContainerImg = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    background-image: url(${BackPlanet});
    background-position: center;
    background-size: cover;
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        margin: 5px;
        padding: 7px;
        border-radius: 15px;
        border-color: none;
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components";
// HomePage
export const ContainerPrincipalGeral = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #fff;
    width: 90%;
    margin-bottom: 50px;
    margin-left: 30px;
    h1 {
        padding: 12px;
    }
    div {
        padding: 10px; 
    }
    button {
        margin: 10px;
    }
    img{
        width: 40px;
        padding-left: 30px;
    }
    img:hover{
        filter: invert(45%); 
    }
    img:active{
        filter: invert(45%); 
    }
`
// TravelPage
export const ContainerTravelList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ContainerTrips = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 77%;
    overflow-y: scroll;

`
// AdmPage
export const ContainerAdmPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
`
export const ContainerInputAdm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    border: 1px solid #fff;
    padding: 10px;
    span {
        margin: 5px;
    }
    input {
        margin: 5px;
        padding: 10px;
        border-radius: 10px;
        width: 90%;
    }
    button{
        margin: 5px;
        padding: 5px;
    }
`

// CardTripPage
export const ContainerTripsPage = styled.div`
display: flex;
flex-direction: column;
margin: 15px;
padding: 10px;
width: 400px;
border: 1px solid #fff;
background-color: #fff;
opacity: .8;
border-radius: 15px;
color: #000;
`
// TripFromPage
export const ContainerTripFromPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
`
export const ContainerFormTrip = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    border: 1px solid #fff;
    padding: 10px;
    span {
        margin: 5px;
    }
    input {
        margin: 5px;
        padding: 10px;
        border-radius: 10px;
        width: 90%;
    }
    select {
        margin: 5px;
        padding: 10px;
        border-radius: 10px;
        width: 94%;
    }
    button{
        margin: 5px;
        padding: 5px;
    }
`

// AdmHomePage
export const ContainerCardsAdmPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerMenuAdmpage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #fff;
    width: 90%;
    margin-bottom: 50px;
    margin-left: 30px;
    h1 {
        padding: 10px;
    }
    button {
        margin: 20px;
    }
`

//CardTrip
export const ContainerCardAdmTrip = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 10px;
    padding: 10px;
    border: 1px solid #fff;
    background-color: #fff;
    opacity: .8;
    border-radius: 15px;
    color: #000000;
    img {
        width: 30px;
    }
    img:hover{
        filter: invert(45%); 
    }
    img:active{
        filter: invert(45%); 
    }
`
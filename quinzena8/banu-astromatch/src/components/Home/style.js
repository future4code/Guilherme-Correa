import styled from 'styled-components'

export const ContanierHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 85%;
    border-width: 7px;
    border-style: dotted;
    border-color: #fe1a89;
`
export const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    #Bem-Vindo {
        width: 95%;
        padding: 10px;
        margin-top: 10px;
    }
    span {
        margin-top: 10px;
    }
`
export const ContainerSend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 5px;
    padding: 7px 15px 7px 15px;
    border: 1px solid gray;
    border-radius: 35px;
    border-color: #1f2050;
    background-color: #1f2050;
    text-decoration: none;
    width: 90%;
    input {
        border: none;
        background-color: #1f2050;
        text-decoration: none;
        box-sizing: border-box;
        outline: 0;
        box-shadow: 0;
        color: #fff;
        width: 100%;
        height: 30px;
    }
    input::placeholder {
        color: #818187;
    }
    #send {
        height: 30px;
        margin-left: 10px;
    }
    #send:hover {
        filter: invert(35%); 
    }
    #send:active {
        filter: invert(35%);
    }
`

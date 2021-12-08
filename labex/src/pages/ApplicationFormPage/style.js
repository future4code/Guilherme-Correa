import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    top: 0;
    border-bottom: 1px solid;
    width: 100%;
    margin-bottom: 3px;
    padding: 3px;
    h1 {
        flex-grow: 1;
        padding: 3px;
        margin: 3px;
    }
    button {
        padding: 7px;
        margin: 3px;
        border-radius: 15px;
        border-color: none;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    width: 70vw;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #1e1e1e;
        color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 10px;
        padding: 15px;
        width: 100%;
    }
    select, input, option {
        width: 90%;
        margin: 5px;
        padding: 7px;
        border-radius: 20px;
        
    }
    select {
        width: 91%;
    }
    button {
        margin: 7px;
        padding: 3px;
        border-radius: 10px;
        width: 20%;
    }
`
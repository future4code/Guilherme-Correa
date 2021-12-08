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
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
        box-shadow: 1px 2px 1px gray;
        padding: 10px;
    }
    select, input, option {
        width: 70%;
        margin: 3px;
        padding: 5px;
        border-radius: 20px;
        
    }
    button {
        margin: 3px;
        padding: 3px;
        border-radius: 10px;
        width: 70%;
    }
`
import React from "react";
import styled from "styled-components";
import Main from "./components/Main";

const ContanierApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #48cdee;
    color: white;
`
function NewApp (props) {
    return (
        <ContanierApp>
            <Main />
        </ContanierApp>
    )
}
export default NewApp;

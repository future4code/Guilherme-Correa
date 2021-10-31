import styled from 'styled-components'

export const ContanierHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    #AstroMatchLogo {
        width: 70%;
    }
    #iconHeader {
        width: 35px;
    }
    #iconHeader:hover{
        filter: invert(25%); 
    }
    #iconHeader:active{
        filter: invert(25%); 
    }
`

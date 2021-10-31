import styled from 'styled-components'

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 75px;
        padding: 0 35px 0 35px;
    }
    img:hover{
        filter: invert(20%); 
    }
    img:active{
        filter: invert(25%); 
    }
`
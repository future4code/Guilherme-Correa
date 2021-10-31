import styled from "styled-components"

export const ContainerMatches = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;

`
export const CardMatch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    border: 1px solid white;
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 5px;
    div {
        padding-left: 5px;
    }
    span {
        padding-left: 10px;
        flex-grow: 1
    }
    img {
        width: 30px;
        padding-right: 5px;
    }
    img:hover{
        filter: invert(35%); 
    }
    img:active{
        filter: invert(35%); 
    }
`
export const PhotoCard = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: ${props => `url(${props.photoBack})`};
    background-position: center top;
    background-size: cover;
    background-repeat:   no-repeat;
`
import styled from "styled-components";

export const ContainerLoding = styled.div`
`

export const ContainerCardTrip = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
`
export const CardList = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 320px;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;

    margin: 10px;
    padding: 10px;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;

    }
    span {
        color: #9e94a3;
        padding: 5px;
        text-align: justify;
    }
    .description {
        text-align: justify;
    }
    .conteudo {
        color: #bcb99e;
    }
`
import styled from "styled-components";

export const ContainerLoding = styled.div`
`

export const ContainerCardTrip = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    width: 100VW;

`
export const ContainerTrip = styled.div`
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 5px 20px 5px 20px;
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
export const ContainerCandidatos = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: #0a1929; */
    margin: 10px;
    padding: 10px;
`
export const ContainerPendentes = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;

    }
`

export const ContainerAprovados = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;

    }
`
export const CardCandidato = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 10px 10px 10px 0;
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
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button {
        padding: 7px;
        margin: 5px;
        border-radius: 10px;
    }
`
export const CardCandidatoAprovado = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 10px 10px 10px 0;
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
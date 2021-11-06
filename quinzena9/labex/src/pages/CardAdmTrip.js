import styled from "styled-components";

const ContainerCardAdmTrip = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #fff;
`

function CardAdmTrip(props) {
    return(
        <ContainerCardAdmTrip>
            <span>Nome da viagem</span>
            <button>Excluir</button>
        </ContainerCardAdmTrip>
    )
}
export default CardAdmTrip;
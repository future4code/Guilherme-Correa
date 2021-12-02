import {Container, ContainerHeader, Main} from './style'
import { useHistory } from 'react-router'
import {CardListTrip} from '../../components/CardListTrip'

export const ListTripsPage = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const goToApplicationForm = () => {
        history.push("/trips/application")
    }
    return (
        <Container>
            <ContainerHeader>
                <h1>Lista de Viagens</h1>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToApplicationForm}>Inscrever-se</button>
            </ContainerHeader>
            <Main>
                <CardListTrip />
            </Main>
        </Container>
    )
}
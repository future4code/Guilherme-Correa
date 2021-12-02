import { Container, ContainerHeader, Main } from './style'
import { useHistory } from 'react-router'
import { CardCandidateAdm } from '../../components/CardCandidateAdm'

export const AdminHomePage = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const goToCreateTripPage = () => {
        history.push('/admin/trips/create')
    }
    return (
        <Container>
            <ContainerHeader>
                <h1>Painel Administrativo</h1>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTripPage}>Criar Viagens</button>
                <button onClick={goBack}>Logout</button>
            </ContainerHeader>
            <Main>
                <CardCandidateAdm />
            </Main>
        </Container>
    )
}
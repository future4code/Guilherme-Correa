import {ContainerCardTrip, ContainerLoding, CardList} from './style'
import { useTripList } from '../../hooks/useTripList'

export const CardListTrip = () => {
    const {trips, isLoading} = useTripList()

    const renderizar = () => {
        if (isLoading) {
            return (
                <ContainerLoding>
                    <h1>Carregando...</h1>
                </ContainerLoding>
            )
        }
        else {
            return (
                <ContainerCardTrip>
                    
                    {trips.map((trip) =>{
                        return (
                            <CardList key={trip.id}>
                                <h3>{trip.name}</h3>
                                <div>
                                    <span>Planeta: </span><span class="conteudo">{trip.planet}</span>
                                </div>
                                <div>
                                    <span>Data: </span><span class="conteudo">{trip.date}</span>
                                </div>
                                <div>
                                    <span>Duração: </span><span class="conteudo">{trip.durationInDays} anos</span>
                                </div>
                                <div class="description">
                                    <span>Descrição: </span><span class="conteudo">{trip.description}</span>
                                </div>
                            </CardList>
                        )
                    })}
                </ContainerCardTrip>
            )
        }
    }
    return renderizar()
    
}
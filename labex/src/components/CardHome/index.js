import {ContainerCardHome, ContainerCard} from './style'
import Planet001 from '../../assets/planet_001.jpeg'
import Planet002 from '../../assets/planet_002.jpeg'
import Planet003 from '../../assets/planet_003.jpeg'
import Planet004 from '../../assets/planet_004.jpeg'

export const CardHome = () => {
    return (
        <ContainerCardHome>
            <ContainerCard>
                <img src={Planet001} alt='planet' />
            </ContainerCard>
            <ContainerCard>
                <img src={Planet002} alt='planet' />
            </ContainerCard>
            <ContainerCard>
                <img src={Planet003} alt='planet' />
            </ContainerCard>
            <ContainerCard>
                <img src={Planet004} alt='planet' />
            </ContainerCard>
        </ContainerCardHome>
    )
    
}
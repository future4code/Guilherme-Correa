import {ContainerTravelList, ContainerTrips, ContainerMenuTrips} from './style';
import { useNavigate } from "react-router-dom";
import { TripsPage } from './TripsPage';

export const TravelPage = () => {
    const navigate = useNavigate();

    const goToTripFormPage = () => {
        navigate("/tripformpage");
    };

    return (
        <ContainerTravelList>
            <ContainerTrips>
                <TripsPage />
            </ContainerTrips>
            <ContainerMenuTrips>
                <h1>Viagens</h1>
                <button
                    onClick={() => navigate(-1)}>Voltar</button>
                <button 
                    onClick={goToTripFormPage}>Inscrever-se</button>
            </ContainerMenuTrips>
        </ContainerTravelList>
    )
}

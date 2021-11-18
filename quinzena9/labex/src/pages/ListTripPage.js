import {ContainerTravelList, ContainerTrips, ContainerPrincipalGeral} from './style';
import { useNavigate } from "react-router-dom";

// Pages
import { TripsPage } from './TripsPage';

// IMG
import IconBack from '../img/undo_white_48dp.svg'
import IconSubscription from '../img/drive_file_rename_outline_white_48dp.svg'

export const ListTripPage = () => {
    const navigate = useNavigate();

    const goToTripFormPage = () => {
        navigate("/trips/application");
    };

    return (
        <ContainerTravelList>
            <ContainerTrips>
                <TripsPage />
            </ContainerTrips>
            <ContainerPrincipalGeral>
                <h1>Viagens</h1>
                <div>
                    <img src={IconBack} alt='Voltar'
                        onClick={() => navigate(-1)} />
                    <img src={IconSubscription} alt='Increver-se'
                        onClick={goToTripFormPage} />
                </div>
            </ContainerPrincipalGeral>
        </ContainerTravelList>
    )
}

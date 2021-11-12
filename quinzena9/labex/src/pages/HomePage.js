import {ContainerPrincipalGeral} from './style';
import { useNavigate } from "react-router-dom";

// IMG
import IconViagens from '../img/flight_takeoff_white_48dp.svg'
import IconManage from '../img/manage_accounts_white_48dp.svg'
export const HomePage = () => {
    const navigate = useNavigate();

    const goVerViagens = () => {
        navigate("/trips/list");
    };
    
    const goToAdmPage = () => {
        navigate("/login");
    };

    return (
        <ContainerPrincipalGeral>
            <h1>LabeX - Fazendo sua viagem espacial</h1>
            <div>
                <img src={IconViagens} alt='Ir para Viagens'
                    onClick={goVerViagens} />
                <img src={IconManage} alt='Is para Painel Administração'
                    onClick={goToAdmPage} />
            </div>
        </ContainerPrincipalGeral>
    )
}
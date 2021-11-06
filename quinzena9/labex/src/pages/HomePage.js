import {ContainerPrincipalHome} from './style';
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const goVerViagens = () => {
        navigate("/travelpage");
    };
    
    const goToAdmPage = () => {
        navigate("/admpage");
    };

    return (
        <ContainerPrincipalHome>
            <h1>LabeX</h1>
            <div>
                <button 
                    onClick={goVerViagens}>Ver Viagens</button>
                <button 
                    onClick={goToAdmPage}>Área Administrativa</button>
            </div>
        </ContainerPrincipalHome>
    )
}
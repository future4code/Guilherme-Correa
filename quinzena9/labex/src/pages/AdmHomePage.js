import {ContainerCardsAdmPage, ContainerMenuAdmpage} from './style'
import { useNavigate } from "react-router-dom";

import CardAdmTrip from "../pages/CardAdmTrip";

export const AdmHomePage = () => {
    const navigate = useNavigate();

    const goToCriarViagemPage = () => {
        navigate("/criarviagempage");
    };

    return (
        <div>
            <ContainerCardsAdmPage>

                <CardAdmTrip />

            </ContainerCardsAdmPage>
            <ContainerMenuAdmpage>
                <h1>Área Administrativa</h1>
                <button 
                    onClick={() => navigate(-2)}>Voltar</button>
                <button
                    onClick={goToCriarViagemPage}>Criar Viagem</button>
                {/* <button
                    onClick={() => {props.onChangePage('sair')}}>Logout</button> */}
            </ContainerMenuAdmpage>
        </div>
    )
}
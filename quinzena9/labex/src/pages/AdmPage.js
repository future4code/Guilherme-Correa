import {ContainerAdmPage, ContainerInputAdm, ContainerMenuAdm} from './style'
import { useNavigate } from "react-router-dom";

export const AdmPage = () => {
    const navigate = useNavigate();

    const goToAdmHomePage = () => {
        navigate("/admhomepage");
    };
    return (
        <ContainerAdmPage>
            <ContainerInputAdm>
                <h3>Login</h3>
                <input
                    placeholder="E-mail"></input>
                <input
                    placeholder="Nome"></input>
                <button
                    onClick={goToAdmHomePage}>Entrar</button>
            </ContainerInputAdm>
            <ContainerMenuAdm>
                <h1>Área Administrativa</h1>
                <button 
                    onClick={() => navigate(-1)}>Voltar</button>
            </ContainerMenuAdm>
        </ContainerAdmPage>
    )
}
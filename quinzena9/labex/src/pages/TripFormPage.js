import { ContainerTripFromPage, ContainerFormTrip, ContainerMenu } from './style';
import { useNavigate } from "react-router-dom";

export const TripFormPage = () => {
    const navigate = useNavigate();
    return (
        <ContainerTripFromPage>
            <ContainerFormTrip>
                <h1>Inscreva-se para uma viagem</h1>
                <select name="viagem" id="viagem">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>

                <input placeholder='Nome' />
                <input placeholder='Idade' />
                <input placeholder='Texto da Candidatura' />
                <input placeholder='Profissão' />

                <select name="select">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
                <button>Enviar</button>
            </ContainerFormTrip>

            <ContainerMenu>
                <button
                    onClick={() => navigate(-1)}>Voltar</button>
            </ContainerMenu>
        </ContainerTripFromPage>
    )
}
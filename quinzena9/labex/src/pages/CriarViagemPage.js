import { useNavigate } from "react-router-dom";

export const CriarViagemPage = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div>Criar Viagem</div>
            <div>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </div>
            <div>
                <button
                    onClick={() => navigate(-2)}>Voltar</button>
                <button>Criar</button>
            </div>
        </div>
    )
}   
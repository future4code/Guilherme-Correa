import {ContainerPrincipalGeral, ContainerCardsAdmPage, ContainerCardAdmTrip} from './style'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import {UrlLabex} from '../constants/url'

// IMG
import IconBack from '../img/undo_white_48dp.svg';
import Logout from '../img/logout_white_48dp.svg';
import CriarViagem from '../img/post_add_white_48dp.svg';
import IconDelete from '../img/delete_outline_black_48dp.svg'

export const AdminHomePage = () => {
    const [trips, setTrips] = useState([])
    const getTrip = async () => {
        let error;
        let response;
        try {
            response = await axios
            .get(`${UrlLabex}guilherme-banu/trips`);
            setTrips(response.data.trips)
        } catch (e) {
            error = e.response;
        }
    }

    const deleteTrip = async (trips) => {
        let error;
        let response;
        try {
            response = await axios
            .delete(`${UrlLabex}guilherme-banu/trips/${trips.id}`, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            });
            console.log("deu certo")
            getTrip()
        } catch (e) {
            error = e.response;
            console.log("deu ruim")
        }
    }
    useEffect(() => {
        getTrip()
    }, [])
    
    const navigate = useNavigate();
    const goToCriarViagemPage = () => {
        navigate("/admin/trips/create");
    };

    return (
        <div>
            <ContainerCardsAdmPage>
                {trips && trips.map((trip)=> {
                    return (
                        <ContainerCardAdmTrip key={trip.id}>
                            <span>{trip.name}</span>
                            <img src={IconDelete} alt='Delete' 
                                onClick={deleteTrip}/>
                        </ContainerCardAdmTrip>
                    )
                })}
            </ContainerCardsAdmPage>
            <ContainerPrincipalGeral>
                <h1>Painel Administrativo</h1>
                <div>
                    <img src={IconBack} alt='Voltar'
                        onClick={() => navigate(-2)} />
                    <img src={CriarViagem} alt='Criar Viagem'
                        onClick={goToCriarViagemPage} />
                    <img src={Logout} alt='Sair'
                        onClick={goToCriarViagemPage} />
                </div>
            </ContainerPrincipalGeral>
        </div>
    )
}
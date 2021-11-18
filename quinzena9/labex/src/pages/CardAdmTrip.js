import {ContainerCardAdmTrip} from './style'
// import { useEffect } from 'react'
// import { getTripDetail } from '../services'
import IconDelete from '../img/delete_outline_black_48dp.svg'

export const CardAdmTrip = () => {
    
    // useEffect(() => {
    //     const fetch = async () => {
    //         const token = localStorage.getItem("token");
    //         const response = await getTripDetail(token, 'NoIFVcOiSgTKTIPVZwXS');
    //         console.log(response);
    //     }
    //     fetch();
    // }, []);

    return(
        <div>
            <ContainerCardAdmTrip>
                <span>Nome da viagem</span>
                <img src={IconDelete} alt='Delete' />
            </ContainerCardAdmTrip>
            <ContainerCardAdmTrip>
                <span>Nome da viagem</span>
                <img src={IconDelete} alt='Delete' />
            </ContainerCardAdmTrip>
            <ContainerCardAdmTrip>
                <span>Nome da viagem</span>
                <img src={IconDelete} alt='Delete' />
            </ContainerCardAdmTrip>
            <ContainerCardAdmTrip>
                <span>Nome da viagem</span>
                <img src={IconDelete} alt='Delete' />
            </ContainerCardAdmTrip>
        </div>
    )
}
import axios from 'axios';
import {UrlLabex} from '../constants/url'

export const login = async ({email, password}) => {
    let error;
    let response;
    try {
        response = await axios
        .post(`${UrlLabex}guilherme-banu/login`, {email, password});
    } catch (e) {
        error = e.response;
    }
    return {
        token: response && response.data.token,
        error
    }
}

export const getTrip = async () => {
    let error;
    let response;
    try {
        response = await axios
        .get(`${UrlLabex}guilherme-banu/trips`);
    } catch (e) {
        error = e.response;
    }
    return {
        response
    }
}

// export const getTripDetail = async (token, id) => {
//     let error;
//     let response;
//     try {
//         response = await axios
//         .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/${id}`, 
//         {
//             headers: {
//                 auth: token
//             }    
//         });
//     } catch (e) {
//         error = e.response;
//     }
//     return {
//         response,
//         error
//     }
// }
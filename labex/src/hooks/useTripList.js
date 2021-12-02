import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import {BASE_URL_API} from '../constants/URL_API'

export const useTripList = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios
        .get(`${BASE_URL_API}guilherme-banu/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        })
    }, [])

    return trips
}
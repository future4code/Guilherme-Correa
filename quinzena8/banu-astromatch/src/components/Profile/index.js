import {ContainerProfile, ClearIcon} from './style.js'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {urlAstroMatch} from '../../constants/url'
import ProfileCard from './ProfileCard.js'
import Footer from "../Footer";
import IconClear from '../../img/clear_all.svg'

function Profile() {
    const [profile, setProfile] = useState({})

    const getProfileToChoose = async () => {
        try {
            const newName = localStorage.getItem("usuario")
            const response = await axios
            .get(`${urlAstroMatch}/astroMatch/${newName}/person`)
                if (response.data.profile != null) {
                setProfile(response.data.profile)
                } else {
                alert ('acabou!')
                }
        }
        catch(err) {
        }
    }
    const clearChooses = async () => {
        try {
            const newName = localStorage.getItem("usuario")
            const response = await axios
            .put(`${urlAstroMatch}/astroMatch/${newName}/clear`)
        }
        catch(err) {
        }
        getProfileToChoose()
    }

    useEffect(
        getProfileToChoose, []
    )

    return (
        <ContainerProfile>
            <ProfileCard 
                profile={profile}
            />
            <Footer
                profile={profile}
                getProfileToChoose={getProfileToChoose}
            />
            <ClearIcon>
                <img src={IconClear} 
                    alt='Limpar Match' 
                    id='ClearIcon'
                    onClick={clearChooses}
                />
            </ClearIcon>
            
        </ContainerProfile>
    )
}
export default Profile;
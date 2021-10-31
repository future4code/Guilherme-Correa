import {useState } from "react"
import axios from "axios"
import {urlAstroMatch} from '../../constants/url'
import {ContainerFooter} from './style.js'
import Like from '../../img/astro_like2.png'
import noLike from '../../img/astro_nolike2.png'

function Footer(props) {
    const [choice, setChoice] = useState(false)

    const choosePerson = async () => {
        const body = {
            id: props.profile.id,
            choice: choice,
        }
        try {
            const newName = localStorage.getItem("usuario")
            const response = await axios
            .post(`${urlAstroMatch}/astroMatch/${newName}/choose-person`, body)
        }
        catch(err) {
        }
    }
    const onClickChoose = async (choice) => {
        setChoice(choice)
        await choosePerson()
        props.getProfileToChoose()
    }

    return (
        <ContainerFooter>
            <img src={Like} alt='Gostei' 
                onClick={() => {onClickChoose(true)}} />
            <img src={noLike} alt='Não Gostei' 
                onClick={() => {onClickChoose(false)}} />
        </ContainerFooter>
    )
}
export default Footer;
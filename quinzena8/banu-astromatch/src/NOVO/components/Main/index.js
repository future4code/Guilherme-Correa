import {ContanierMain, ContainerPrincipal} from './styled.js'
import { useState } from "react";

import Footer from "../Footer";
import Header from '../Header';
import Home from '../Home/'
import Profile from '../Profile/'
import Matchs from '../Matchs/'


function Main(props) {
    const [homePage, setHomePage] = useState('')

    const renderPage = () => {
        switch(homePage) {
            case 'inicio':
                return <Home />
            case 'profile':
                return <Profile />
            case 'matchs':
                return <Matchs />
            default: <Profile />
        }
    }
    const onChangePage = (homePage) => {
        setHomePage(homePage)
    }

    return (
        <ContanierMain>
            <Header 
                onChangePage={onChangePage}
            />
            <ContainerPrincipal>
                {renderPage()}
            </ContainerPrincipal>
            <Footer />
        </ContanierMain>
    )
}
export default Main;
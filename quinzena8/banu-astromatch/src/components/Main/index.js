import {ContanierMain, ContainerPrincipal} from './style.js'
import { useState } from "react";
import Header from '../Header';
import Home from '../Home/'
import Profile from '../Profile/'
import Matchs from '../Matchs/'

function Main() {
    const [homePage, setHomePage] = useState('inicio')

    const renderPage = () => {
        switch(homePage) {
            case 'inicio':
                return <Home 
                    onChangePage={onChangePage}/>
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
        </ContanierMain>
    )
}
export default Main;
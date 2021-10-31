import {ContanierHeader} from './style.js';
import AstroMatchLogo from '../../img/logo_astromatch.png'
import IconVoltar from '../../img/icon_back.svg'
import IconMatchs from '../../img/icon_matchs.svg'

function Header(props) {
    return (
        <ContanierHeader>
            <img src={IconVoltar} 
                alt='Back' 
                id='iconHeader' 
                onClick={() => props.onChangePage('profile')} />
            <img src={AstroMatchLogo} 
                alt='Logo Astromatch' 
                id='AstroMatchLogo'
            />
            <img src={IconMatchs} 
                alt='Matchs' 
                id='iconHeader' 
                onClick={() => props.onChangePage('matchs')} 
            />
        </ContanierHeader>
    )
}
export default Header;
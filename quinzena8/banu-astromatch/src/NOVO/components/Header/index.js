import {ContanierHeader, AstroMatchLogo} from './style.js';

function Header(props) {
    return (
        <ContanierHeader>
            <button 
                onClick={() => props.onChangePage('profile')}>Voltar</button>
            <img src={AstroMatchLogo} />
            <button 
                onClick={() => props.onChangePage('matchs')}>Matchs</button>
        </ContanierHeader>
    )
}
export default Header;
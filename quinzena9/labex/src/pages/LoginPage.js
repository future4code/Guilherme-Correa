import {ContainerAdmPage, ContainerInputAdm, ContainerPrincipalGeral} from './style'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../services';

// IMG
import IconBack from '../img/undo_white_48dp.svg'

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeEmail = (ev) =>{
        setEmail(ev.target.value)
    }
    const onChangePassword = (ev) =>{
        setPassword(ev.target.value)
    }
    const onClickLogin = async (ev) => {
        ev.preventDefault()

        const response = await login({
            email,
            password
        });
        if (response.token) {
            localStorage.setItem('token', response.token)
            navigate("/admin/trips/list");
        } else {
            alert(response.error.data.message)
        }
    }
    return (
        <ContainerAdmPage>
            <ContainerInputAdm>
                <h3>Login</h3>
                <form onSubmit={onClickLogin}>
                    <input
                        name={email}
                        value={email} 
                        type="email"
                        placeholder="E-mail"
                        onChange={onChangeEmail} 
                        required 
                    />
                    <input
                        name={password}
                        value={password} 
                        type="password" 
                        placeholder="Senha"
                        onChange={onChangePassword} 
                        required 
                        title={"Sua senha deve ter no mínimo 4 caracteres"}
                    />
                    <button>Entrar</button>
                </form>
            </ContainerInputAdm>
            <ContainerPrincipalGeral>
                <h1>Área Administrativa</h1>
                <div>
                    <img src={IconBack} alt='Voltar'
                        onClick={() => navigate(-1)} />
                </div>
            </ContainerPrincipalGeral>
        </ContainerAdmPage>
    )
}
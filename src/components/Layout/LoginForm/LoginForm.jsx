import LogoSvg from '../LogoSvg';
import styles from './LoginForm.module.css'
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    function Login() {
        console.log("Entrou")
        navigate("/home")
    }

    return (
        <div className={styles.login_form}>
            <LogoSvg />
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha"/>
            <p>Esqueci minha senha</p>
            <button onClick={Login}>Entrar</button>
        </div>
    )
 }
export default LoginForm;
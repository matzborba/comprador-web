import LogoSvg from '../LogoSvg';
import styles from './LoginForm.module.css'
import { useNavigate, Link } from "react-router-dom";


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
            <Link>Esqueci minha senha</Link>
            <button onClick={Login}>Entrar</button>
        </div>
    )
 }
export default LoginForm;
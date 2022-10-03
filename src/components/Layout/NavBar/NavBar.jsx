import { Link } from "react-router-dom";
import LogoSvg from "../LogoSvg";
import NotifcationIcon from "./NotifcationIcon/NotificationIcon";
import styles from "./NavBar.module.css"
import PerfilSvg from "../../../assets/Perfil.svg"


function Navbar() {

  return (
    <nav className={styles.nav_content}>
      <div className={styles.nav_logo}>
        <Link to="/home">
          <LogoSvg/>
        </Link>
      </div>
      <div className={styles.nav_itens}>
        <div className={styles.nav_user_info}>
          <NotifcationIcon />
          <p>Olá, João Paulo</p>
          <img src={PerfilSvg} alt="foto do usuario"/>
        </div>
        <ul>
          <li>
            <Link to="/home">Início</Link>
          </li>
          <li>
            <Link to="/abates">Meus abates</Link>
          </li>
          <li>
            <Link to="/pedidos">Meus pedidos</Link>
          </li>
          <li>
            <Link to="/ecommerce">E-commerce</Link>
          </li>
          <li>
            <Link to="/ofertas">Minhas ofertas</Link>
          </li>
          <li>
            <Link to="/tarefas">Minhas tarefas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

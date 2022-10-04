import { Link, NavLink } from "react-router-dom";
import LogoSvg from "../LogoSvg";
import NotifcationIcon from "./NotifcationIcon/NotificationIcon";
import styles from "./NavBar.module.css"
import PerfilSvg from "../../../assets/Perfil.svg"
import * as React from "react";


function Navbar() {

  let activeStyle = {
    fontWeight: 600,
    fontSize: "16px",
    height: "36px",
    width: "130px",
    backgroundColor:"#495057",
    color: "#ffffff",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px 12px",
    borderRadius: "8px"
  }

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
            <NavLink to="/home" className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.desactiveStyle
            }>Início</NavLink>
            <NavLink to="/abates" className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.desactiveStyle
            }>Meus abates</NavLink>
            <NavLink to="/pedidos" className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.desactiveStyle
            }>Meus pedidos</NavLink>
            <NavLink to="/ecommerce" className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.desactiveStyle
            }>E-commerce</NavLink>
            <NavLink to="/ofertas" className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.desactiveStyle
            }>Minhas ofertas</NavLink>
            <NavLink to="/tarefas" className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.desactiveStyle
            }>Minhas tarefas</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

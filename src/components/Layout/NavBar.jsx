import { Link } from "react-router-dom";
import LogoSvg from "../Layout/LogoSvg";

function Navbar() {
  return (
      <nav >
        <Link to="/">
          <LogoSvg/>
        </Link>
        <ul>
          <li>
            <Link to="/">Início</Link>
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
    </nav>
  );
}

export default Navbar;

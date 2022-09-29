import {Routes, Route} from "react-router-dom"
import AbatesView from "../Views/AbatesView";
import EcommerceView from "../Views/EcommerceView";
import HomeView from "../Views/HomeView";
import OfertasView from "../Views/OfertasView";
import PedidosView from "../Views/PedidosView";
import TarefasView from "../Views/TarefasView";
import LoginView from "../Views/Login/LoginView";

function RoutesConfig() {
    return (
      <Routes>
        <Route exact path="/" element={<LoginView />}></Route>
        <Route exact path="/home" element={<HomeView />}></Route>
        <Route path="/abates" element={<AbatesView />}></Route>
        <Route path="/pedidos" element={<PedidosView />}></Route>
        <Route path="/ecommerce" element={<EcommerceView />}></Route>
        <Route path="/ofertas" element={<OfertasView />}></Route>
        <Route path="/tarefas" element={<TarefasView />}></Route>
      </Routes>
    )
 }
export default RoutesConfig;
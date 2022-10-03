import HomePageChart from "../../Charts/HomePageChart"
import RoundedChart from "../../Charts/RoundedChart"
import BasicCard from "../../Layout/Cards/BasicCard"
import Container from "../../Layout/Container/Container"
import Navbar from "../../Layout/NavBar/NavBar"
import StatusTask from "../../Layout/StatusTask/StatusTask"
import styles from "./HomePageContent.module.css"
import { useEffect, useState } from  "react"
import { Link } from "react-router-dom"
//import BoiSvg from "../../../assets/Animais/BoiSvg"
//import VacaSvg from "../../../assets/Animais/VacaSvg"



function HomePageContent() {

    const [color, setColor] = useState("")

    useEffect(() => {
        colorStatus();
    })

    const colorStatus = () => {
        taskData.forEach(task => {
            if (task.status === "Aguardando") {
                setColor("#E9ECEF")
            }
            if (task.status === "Vencida") {
                setColor("#F5D98C")
            }
            if (task.status === "Finalizada") {
                setColor("#B39243")
            }
        })
    }


    const taskData = [{
        id: 0,
        title: "Aguardando Embarque",
        fazenda: "Fazenda Flores",
        time: "14:30",
        status: "Aguardando",
        color: ""
    },
    {
        id: 1,
        title: "Aguardando Embarque",
        fazenda: "Fazenda Flores",
        time: "10:30",
        status: "Vencida",
        color: ""
        },
    {
        id: 2,
        title: "Aguardando Embarque",
        fazenda: "Fazenda Flores",
        time: "09:30",
        status: "Finalizada",
        color: ""
    }]

    return (
        <Container>
            <Navbar />
            <div className={styles.homepage_content}>
                <div className={styles.homepage_basic_info}>
                    <BasicCard color="#F8F9FA">
                        <h3>Criar</h3>
                        <p>Pecuarista Origem</p>
                        <input placeholder="Nome do Pecuarista" type="text"/>
                        <div className={styles.homepage_basic_info_btn}>
                            <button>Novo Pedido</button>
                            <button>Nova Oferta</button>
                        </div>
                    </BasicCard>
                    <BasicCard color="#F8F9FA">
                        <h3>Minhas tarefas</h3>
                        <div className={styles.rounded_charts_content}>
                            <RoundedChart color="#A3E2B4" progress={100} text="Tarefas"/>
                            <RoundedChart color="#B39243" progress={80}  text="Final"/>
                            <RoundedChart color="#F5D98C" progress={50}  text="Vencidas"/>
                        </div>
                        <div className={styles.homepage_basic_info_tasks}>
                        <select placeholder="Por Data" name='select-data' defaultValue="0">
                            <option value="0" disabled>Por data</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                            <button>Nova Tarefa</button>
                        </div>
                        <div>
                            <h3 style={{color: "black"}}>Hoje</h3>
                                <div>
                                    {taskData.map((task) => (
                                        <div key={task.id} className={styles.tasks_content}>
                                            <div className={styles.tasks_content_info}>
                                                <p>{task.time}</p>
                                                <div className={styles.tasks_content_tile}>
                                                    <h4>{task.title}</h4>
                                                    <p>{task.fazenda}</p>
                                                    <StatusTask color={color} text={task.status} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                <Link to="/tarefas" className={styles.direct_task}>Ver todas as tarefas</Link>
                            </div>
                        </div>
                    </BasicCard>
                </div>
                <div className={styles.homepage_principal_info}>
                    <HomePageChart />
                    <div className={styles.homepage_task_purchase}>
                        <div className={styles.homepage_task_card}>
                            <h3 style={{ color: "black" }}>Minhas compras</h3>
                            <div className={styles.homepage_task_card_info}>
                                <BasicCard color="#ECF9F0" align="center">
                                    <div className={styles.basic_card_style}>
                                        <h4>Volume total</h4>
                                        <h1>100</h1>
                                        <h4>Preço RS</h4>
                                        <h4>215,00</h4>
                                    </div>
                                </BasicCard>
                                <BasicCard color="#DCEFF9" align="center">
                                <div className={styles.basic_card_style}>
                                        <h4>Volume total</h4>
                                        <h1>100</h1>
                                        <h4>Preço RS</h4>
                                        <h4>215,00</h4>
                                    </div>
                                </BasicCard>
                                <BasicCard color="#FCE6E7" align="center">
                                <div className={styles.basic_card_style}>
                                        <h4>Volume total</h4>
                                        <h1>100</h1>
                                        <h4>Preço RS</h4>
                                        <h4>215,00</h4>
                                    </div>
                                </BasicCard>
                            </div>
                        </div>
                        <div className={styles.homepage_purchase_card}>
                            <h3 style={{ color: "black" }}>Minhas ofertas</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
 }
export default HomePageContent
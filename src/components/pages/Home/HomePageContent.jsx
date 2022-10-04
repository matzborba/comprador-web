import HomePageChart from "../../Charts/HomePageChart";
import RoundedChart from "../../Charts/RoundedChart";
import BasicCard from "../../Layout/Cards/BasicCard";
import Container from "../../Layout/Container/Container";
import Navbar from "../../Layout/NavBar/NavBar";
import StatusTask from "../../Layout/StatusTask/StatusTask";
import styles from "./HomePageContent.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoiSvg from "../../../assets/Animais/BoiSvg";
import VacaSvg from "../../../assets/Animais/VacaSvg";
import Carousel from "../../Layout/Carousel/Carousel";
import { faker } from "@faker-js/faker";
import Table from "../../Layout/Table/Table";

function HomePageContent() {
  const [color, setColor] = useState("");

  useEffect(() => {
    colorStatus();
  });

  const colorStatus = () => {
    taskData.forEach((task) => {
      if (task.status === "Aguardando") {
        setColor("#E9ECEF");
      }
      if (task.status === "Vencida") {
        setColor("#F5D98C");
      }
      if (task.status === "Finalizada") {
        setColor("#B39243");
      }
    });
  };

  const labels = [
    "09/03",
    "09/04",
    "04/05",
    "09/06",
    "09/07",
    "09/08",
    "09/09",
    "09/10",
    "09/11",
    "09/12",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Meta",
        borderColor: "rgba(73, 80, 87, 1)",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => 50),
      },
      {
        type: "line",
        label: "Escala",
        borderColor: "rgba(82, 175, 227, 1)",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      },
      {
        type: "bar",
        label: "Comprador",
        backgroundColor: "rgba(233, 56, 66, 1)",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "rgba(70, 197, 105, 1)",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      },
    ],
  };

  const carouselData = [
    {
      status: "Vencida",
      date: "08/12/2021",
      orderId: 3213,
      rancher: "Borba Teste",
      rancherId: 53454,
      farm: "Fazenda Borba",
      farmId: 87942,
      decreases: 200,
      ox: 50,
      cow: 150,
    },
    {
      status: "Finalizada",
      date: "05/06/2022",
      orderId: 54543,
      rancher: "Teste",
      rancherId: 31231,
      farm: "Fazenda Teste",
      farmId: 8323,
      decreases: 100,
      ox: 80,
      cow: 20,
    },
    {
      status: "Finalizada",
      date: "05/06/2022",
      orderId: 545432,
      rancher: "Teste",
      rancherId: 31231,
      farm: "Fazenda Teste",
      farmId: 8323,
      decreases: 100,
      ox: 80,
      cow: 20,
    },
  ];

  const taskData = [
    {
      id: 0,
      title: "Aguardando Embarque",
      fazenda: "Fazenda Flores",
      time: "14:30",
      status: "Aguardando",
      color: "",
    },
    {
      id: 1,
      title: "Aguardando Embarque",
      fazenda: "Fazenda Flores",
      time: "10:30",
      status: "Vencida",
      color: "",
    },
    {
      id: 2,
      title: "Aguardando Embarque",
      fazenda: "Fazenda Flores",
      time: "09:30",
      status: "Finalizada",
      color: "",
    },
    {
      id: 3,
      title: "Aguardando Embarque",
      fazenda: "Fazenda Flores",
      time: "09:30",
      status: "Finalizada",
      color: "",
    },
    {
      id: 4,
      title: "Aguardando Embarque",
      fazenda: "Fazenda Flores",
      time: "09:30",
      status: "Finalizada",
      color: "",
    },
  ];

  return (
    <Container>
      <Navbar />
      <div className={styles.homepage_content}>
        <div className={styles.homepage_basic_info}>
          <BasicCard color="#F8F9FA">
            <h3>Criar</h3>
            <p>Pecuarista Origem</p>
            <input placeholder="Nome do Pecuarista" type="text" />
            <div className={styles.homepage_basic_info_btn}>
              <button>Novo Pedido</button>
              <button>Nova Oferta</button>
            </div>
          </BasicCard>
          <BasicCard color="#F8F9FA">
            <h3>Minhas tarefas</h3>
            <div className={styles.rounded_charts_content}>
              <RoundedChart color="#A3E2B4" progress={100} text="Tarefas" />
              <RoundedChart color="#B39243" progress={80} text="Final" />
              <RoundedChart color="#F5D98C" progress={50} text="Vencidas" />
            </div>
            <div className={styles.homepage_basic_info_tasks}>
              <select
                placeholder="Por Data"
                name="select-data"
                defaultValue="0"
              >
                <option value="0" disabled>
                  Por data
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button>Nova Tarefa</button>
            </div>
            <div>
              <h3 style={{ color: "black" }}>Hoje</h3>
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
                <Link to="/tarefas" className={styles.direct_task}>
                  Ver todas as tarefas
                </Link>
              </div>
            </div>
          </BasicCard>
        </div>
        <div className={styles.homepage_principal_info}>
          <HomePageChart data={chartData} />
          <div className={styles.homepage_task_purchase}>
            <div className={styles.homepage_task_card}>
              <h3 style={{ color: "black" }}>Minhas compras</h3>
              <div className={styles.homepage_task_card_info}>
                <BasicCard color="#ECF9F0" align="center" w="30%">
                  <div className={styles.basic_card_style}>
                    <h4>Volume total</h4>
                    <h1>100</h1>
                    <h4>Preço RS</h4>
                    <h4>215,00</h4>
                  </div>
                </BasicCard>
                <BasicCard color="#DCEFF9" align="center" w="30%">
                  <div className={styles.basic_card_style}>
                    <h4>Volume total</h4>
                    <h1>100</h1>
                    <h4>Preço RS</h4>
                    <h4>215,00</h4>
                  </div>
                </BasicCard>
                <BasicCard color="#FCE6E7" align="center" w="30%">
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
              <div className={styles.purchase_card_content}>
                <BasicCard color="#F8F9FA">
                  <h4>Total de animais</h4>
                  <div className={styles.purchase_card_info}>
                    <div className={styles.purchase_card_info_boi}>
                      <BoiSvg />
                      <p>Macho</p>
                      <span>100</span>
                    </div>
                    <div className={styles.purchase_card_info_vaca}>
                      <VacaSvg />
                      <p>Fêmea</p>
                      <span>500</span>
                    </div>
                  </div>
                </BasicCard>
                <BasicCard color="#F8F9FA">
                  <h4>Total de ofertas</h4>
                  <div className={styles.offers_charts_content}>
                    <div className={styles.offers_charts_content_info}>
                      {/* <div className={styles.offers_charts_content_position}>
                        <RoundedChart
                          color="#A3E2B4"
                          progress={100}
                          text="Tarefas"
                        />
                        <RoundedChart
                          color="#B39243"
                          progress={80}
                          text="Final"
                        />
                        <RoundedChart
                          color="#F5D98C"
                          progress={50}
                          text="Vencidas"
                        />
                      </div> */}
                    </div>
                  </div>
                </BasicCard>
              </div>
            </div>
          </div>
          <div className={styles.carousel_table_content}>
            <div className={styles.carousel_container}>
              <div className={styles.carousel_filter_link}>
                <select
                  placeholder="Por Linha"
                  name="select-data"
                  defaultValue="0"
                >
                  <option value="0">Por linha</option>
                </select>
                <Link to="/pedidos">Ver todos os pedidos</Link>
              </div>
              <Carousel>
                <div className={styles.cards_carousel}>
                  {carouselData.map((i) => (
                    <div
                      key={i.orderId}
                      className={styles.cards_carousel_display}
                    >
                      <div className={styles.itens_carousel_info}>
                        <div className={styles.itens_content_carousel}>
                          <div className={styles.carousel_status}>
                            <span>{i.status}</span>
                          </div>
                          <p className={styles.orderDate}>{i.date}</p>
                        </div>
                        <div className={styles.itens_content_carousel}>
                          <p className={styles.p_negrito}>Pedido</p>
                          <p className={styles.p_suave}>{i.orderId}</p>
                        </div>
                        <div className={styles.itens_content_carousel}>
                          <p className={styles.p_negrito}>Pecuarista</p>
                          <p className={styles.p_suave}>{i.rancher}</p>
                          <p className={styles.p_suave}>{i.rancherId}</p>
                        </div>
                        <div className={styles.itens_content_carousel}>
                          <p className={styles.p_negrito}>Pecuarista</p>
                          <p className={styles.p_suave}>{i.farm}</p>
                          <p className={styles.p_suave}>{i.farmId}</p>
                        </div>
                      </div>
                      <div className={styles.itens_carousel_info_2}>
                        <div className={styles.itens_content_carousel}>
                          <p className={styles.p_negrito}>
                            {i.decreases} abates
                          </p>
                          <p className={styles.p_suave}>{i.ox} Machos</p>
                          <p className={styles.p_suave}>{i.cow} Fêmea</p>
                        </div>
                      </div>
                      <div className={styles.itens_carousel_info_3}>
                        <Link
                          to={"/pedidos"}
                          className={styles.redirect_carousel}
                        >
                          Refazer Pedido
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel>
            </div>
            <div className={styles.table_container}>
              <div className={styles.table_title}>
                <h3 style={{ color: "black" }}>Últimas ofertas</h3>
                <Link to="/ofertas">Ver todas as ofertas</Link>
              </div>
              <div>
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default HomePageContent;

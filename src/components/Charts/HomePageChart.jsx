import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "./HomePageChart.module.css";
import IconFilter from "../../assets/IconFilter";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

function HomePageChart({ data }) {
  return (
    <div className={styles.chart_content}>
      <button className={styles.btn_filter}>
        <span>Unidade</span>
        <IconFilter />
      </button>
      <Chart type="bar" data={data} />
    </div>
  );
}

export default HomePageChart;

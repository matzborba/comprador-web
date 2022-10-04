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

function HomePageChart({data}) {
  return (
    <div className={styles.chart_content}>
      <select
        placeholder="Unidade"
        name="select-unidade"
        defaultValue="0"
        className={styles.chart_select}
      >
        <option value="0" disabled>
          Unidade
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <Chart type="bar" data={data} />
    </div>
  );
}

export default HomePageChart;

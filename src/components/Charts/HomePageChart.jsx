import React from 'react';
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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import styles from "./HomePageChart.module.css"


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

const labels = ['09/03', '09/04', '04/05', '09/06', '09/07', '09/08', '09/09', '09/10', '09/11', '09/12'];

export const data = {
  labels,
    datasets: [
    {
        type: 'line',
        label: 'Meta',
        borderColor: 'rgba(73, 80, 87, 1)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => 50),
    },
    {
        type: 'line',
        label: 'Escala',
        borderColor: 'rgba(82, 175, 227, 1)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: -40, max: 80 })),
    },
    {
        type: 'bar',
        label: 'Comprador',
        backgroundColor: 'rgba(233, 56, 66, 1)',
        data: labels.map(() => faker.datatype.number({ min: -40, max: 80 })),
        borderColor: 'white',
        borderWidth: 2,
        },
    {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgba(70, 197, 105, 1)',
        data: labels.map(() => faker.datatype.number({ min: -40, max: 80 })),
    },
  ],
};

function HomePageChart() {
    return (
      <div className={styles.chart_content}>
        <select placeholder="Unidade" name='select-unidade' defaultValue="0" className={styles.chart_select}>
          <option value="0" disabled>Unidade</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
            <Chart type='bar' data={data} />
        </div>);
}

export default HomePageChart;
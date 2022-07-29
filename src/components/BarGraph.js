/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDeferred from 'chartjs-plugin-deferred';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  ChartDeferred,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = 'Gotham Narrow Book';

const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#fff',
      },
      grid: {
        color: 'dark grey',
      },
    },
    y: {
      ticks: {
        color: '#fff',
      },
      grid: {
        color: 'dark grey',
      },
    },
  },

  plugins: {
    legend: {
      position: 'top',
      color: '#fff',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: '#fff',
    },
    deferred: {
      delay: 500,
      yOffset: '300px',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#B8D98D',
      borderColor: '#fff',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#FBD166',
    },
  ],
};

const BarGraph = () => <Bar options={options} data={data} />;

export default BarGraph;

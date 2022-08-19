/* eslint-disable import/no-extraneous-dependencies */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  SubTitle,
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
  SubTitle,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = 'Gotham Narrow Book';

const options = {
  aspectRatio: 1,
  responsive: true,
  layout: {
    padding: {
      bottom: 20,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#000',
      },
    },
    y: {
      ticks: {
        color: '#000',
      },
      title: {
        display: true,
        text: 'Average earnings relative to white men (%)',
      },
    },
  },

  plugins: {
    legend: {
      position: 'top',
      color: '#000',
    },
    title: {
      display: true,
      text: 'Wages by Gender and Ethnicity',
      color: '#000',
      font: {
        size: 14,
        family: 'Gotham Narrow Black',
      },
    },
    subtitle: {
      display: true,
      text: 'Women make less than men in every ethnicity group, with Latin American women making only 65% of what a man earns',
      font: {
        family: 'Gotham Narrow Medium',
      },
    },
    deferred: {
      delay: 500,
      yOffset: '300px',
    },
  },
};

const labels = [
  'White',
  'Southeast Asian',
  'South Asian',
  'Other',
  'Latin American',
  'Korean',
  'Japanese',
  'Filipino',
  'Chinese',
  'Black',
  'Arab or West Asian',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Female',
      data: [
        73.20261438, 71.89542484, 86.92810458, 76.47058824, 65.35947712,
        94.77124183, 86.2745098, 82.35294118, 94.11764706, 70.58823529,
        73.20261438,
      ],
      backgroundColor: '#F2695D',
    },
    {
      label: 'Male',
      data: [
        100, 84.96732026, 109.8039216, 84.96732026, 75.81699346, 112.4183007,
        114.379085, 84.31372549, 103.2679739, 79.08496732, 79.08496732,
      ],
      backgroundColor: '#253D88',
    },
  ],
};

const WageGraph = () => (
  <>
    <Bar options={options} data={data} />
    <sub>
      Source: Statistics Canada, 2016 Census of Population. <br />
      Learn more about affordability for youth in Canada at{' '}
      <a
        href="https://youthfulcities.com/urban-indexes/rai-2022/"
        target="_blank"
        rel="noreferrer">
        https://youthfulcities.com/urban-indexes/rai-2022/
      </a>
    </sub>
  </>
);

export default WageGraph;

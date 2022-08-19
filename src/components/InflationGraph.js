/* eslint-disable import/no-extraneous-dependencies */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  SubTitle,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDeferred from 'chartjs-plugin-deferred';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  ChartDeferred,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
  PointElement
);

ChartJS.defaults.font.family = 'Gotham Narrow Book';

const options = {
  // animations: {
  //   tension: {
  //     duration: 1000,
  //     easing: 'linear',
  //     from: 1,
  //     to: 0,
  //     loop: true,
  //   },
  // },
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
      title: {
        display: true,
        text: 'Avg. Inflation Rate (%)',
      },
    },
    y: {
      ticks: {
        color: '#000',
      },
      title: {
        display: true,
        text: 'Year',
      },
    },
  },

  plugins: {
    legend: {
      display: false,
      position: 'top',
      color: '#000',
    },
    title: {
      display: true,
      text: 'Inflation rate in Canada between 2019 and 2022',
      color: '#000',
      font: {
        size: 14,
        family: 'Gotham Narrow Black',
      },
    },
    subtitle: {
      display: true,
      text: 'Canadian inflation peaked at 8.1% in June 2022 due to increase in consumer goods prices, such as gasoline. ',
      font: {
        family: 'Gotham Narrow Medium',
      },
      padding: {
        bottom: 20,
      },
    },
    deferred: {
      delay: 500,
      yOffset: '300px',
    },
  },
};

const labels = ['2019', '2020', '2021', '2022'];

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [1.948467929, 0.721875277, 3.394053014, 6.686929199],
      backgroundColor: '#F2695D',
      borderColor: '#F2695D',
      borderWidth: 4,
    },
  ],
};

const InflationGraph = () => (
  <>
    <Line options={options} data={data} />{' '}
    <sub>
      Source: Statistics Canada. Table 18-10-0004-01 Consumer Price Index,
      monthly, not seasonally adjusted
      <br /> Learn more about affordability for youth in Canada at{' '}
      <a
        href="https://youthfulcities.com/urban-indexes/rai-2022/"
        target="_blank"
        rel="noreferrer">
        https://youthfulcities.com/urban-indexes/rai-2022/
      </a>
    </sub>
  </>
);

export default InflationGraph;

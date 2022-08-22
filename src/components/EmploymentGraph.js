/* eslint-disable import/no-extraneous-dependencies */
import { Typography } from '@mui/material';
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
  indexAxis: 'y',
  aspectRatio: 1,
  yAxisID: 'test',
  responsive: true,
  animation: {
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default') {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
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
        text: 'Avg. Employment Rate (%)',
      },
      max: 100,
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
      position: 'top',
      color: '#000',
    },
    title: {
      display: false,
      text: 'Employment in Canada between 2019 and 2022 for males and females age 15-24 years old',
      color: '#000',
      font: {
        size: 14,
        family: 'Gotham Narrow Black',
      },
    },
    subtitle: {
      display: false,
      text: 'Between 15-24 years old, females have an average employment rate of 59%, higher than males 55%',
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

const labels = ['2019', '2020', '2021', '2022'];

const data = {
  labels,
  datasets: [
    {
      label: 'Female',
      data: [59.15, 49.71666667, 56, 59.16666667],
      backgroundColor: '#F2695D',
      borderColor: '#fff',
    },
    {
      label: 'Male',
      data: [56.025, 49.41666667, 54.65, 55.86666667],
      backgroundColor: '#673934',
    },
  ],
};

const EmploymentGraph = () => (
  <>
    <Typography variant="h4" textAlign="center" mb={1} mt={2}>
      Employment in Canada between 2019 and 2022 for males and females age 15-24
      years old
    </Typography>
    <Typography variant="h6" textAlign="center" mb={1}>
      Between 15-24 years old, females have an average employment rate of 59%,
      higher than males 55%
    </Typography>
    <Bar options={options} data={data} />
    <sub>
      Source: Statistics Canada. Table 14-10-0023-01 Labour force
      characteristics by industry, annual (x 1,000).
    </sub>
  </>
);

export default EmploymentGraph;

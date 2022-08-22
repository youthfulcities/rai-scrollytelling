/* eslint-disable import/no-extraneous-dependencies */
import { Typography } from '@mui/material';
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
import { useEffect, useState } from 'react';
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

const xAxis = [1.948467929, 0.721875277, 3.394053014, 6.686929199];

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
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      ticks: {
        color: '#000',
      },
      title: {
        display: true,
        text: 'Avg. Inflation Rate (%)',
      },
      max: 7,
    },
  },

  plugins: {
    legend: {
      display: false,
      position: 'top',
      color: '#000',
    },
    title: {
      display: false,
      text: 'Inflation rate in Canada between 2019 and 2022',
      color: '#000',
      font: {
        size: 14,
        family: 'Gotham Narrow Black',
      },
    },
    subtitle: {
      display: false,
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

const InflationGraph = () => {
  const [currentData, setCurrentData] = useState([]);

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: xAxis,
        backgroundColor: '#F2695D',
        borderColor: '#F2695D',
        borderWidth: 4,
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentData(xAxis[0]);
      console.log(currentData);
    }, 1000);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ width: '100%' }}
        mb={1}
        mt={2}>
        Inflation rate in Canada between 2019 and 2022
      </Typography>
      <Typography variant="h6" textAlign="center" mb={1}>
        Canadian inflation peaked at 8.1% in June 2022 due to increase in
        consumer goods prices, such as gasoline
      </Typography>
      <Line options={options} data={data} />{' '}
      <sub>
        Source: Statistics Canada. Table 18-10-0004-01 Consumer Price Index,
        monthly, not seasonally adjusted.
      </sub>
    </>
  );
};

export default InflationGraph;

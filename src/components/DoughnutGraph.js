import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Pink', 'Brown'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#F2695D',
        '#253D88',
        '#FBD166',
        '#B8D98D',
        '#F6D9D7',
        '#673934',
      ],
      borderColor: [],
      borderWidth: 0,
    },
  ],
};

const DoughnutGraph = () => <Doughnut data={data} />;

export default DoughnutGraph;

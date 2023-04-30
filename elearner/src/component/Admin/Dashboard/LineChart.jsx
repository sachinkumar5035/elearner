import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getLastYearMonths } from './DoughnutChart';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Yearly Views',
        },
    },
};

const labels = getLastYearMonths();

export const data = {
    labels,
    datasets: [
        {
            label: 'Views',
            data: [1, 2, 3, 4],
            borderColor: 'rgba(107,70,193,.6)',
            backgroundColor: '#6b46c1',
        }
    ],
};

export const LineChart = () => {
    return <Line options={options} data={data} />;
}



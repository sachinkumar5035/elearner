import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  
   labels:['subscribed','not subscribed'],
  datasets: [
    {
      label: 'user',
      data: [2,20],
      backgroundColor: [
        'rgba(107,70,193, 0.2)',
        'rgba(235, 52, 180, 0.2)'
      ],
      borderColor: [
        'rgba(107,70,193, 1)',
        'rgba(235, 52, 180, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart=()=> {
  return <Doughnut data={data} />
}


export function getLastYearMonths(){
    const labels=[];
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = new Date().getMonth();
    const remainMonth  = 11-currentMonth;
    // console.log(currentMonth+" "+remainMonth);
    for (let index = currentMonth ; index < months.length; index--) {
        const element = months[index];
        labels.unshift(element);
        if(index===0) break;
    }
    // console.log(labels);
    for (let index = 11; index >remainMonth; index--) {
        if(index===currentMonth) break;
        const element = months[index];
        labels.unshift(element);
    }
    // console.log(labels);
    return labels;
}

getLastYearMonths();
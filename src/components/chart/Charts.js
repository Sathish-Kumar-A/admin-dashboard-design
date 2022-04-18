import React from 'react';
import Chart from "react-apexcharts";
import { DonutChart } from './DonutChart';
import "./chart.css";

export const Charts = () => {
  const data=[0,10000,20000,30000,40000]
  const state ={
      series: [{
      name: "Earnings",
      data: data
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Earnings Overview',
        align: 'left',
        colors:["blue"]
      },
      grid: {
        row: {
          colors: ['white', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      }
    },


  }
  return (
    <div className='mx-2 mt-5 chart-wrapper d-flex justify-content-around align-items-center'>
        <Chart
        options={state.options}
        series={state.series}
          type="line"
          height={300}
          className = "border border-1 p-2 line-chart rounded bg-white"
      />
      <DonutChart />
    </div>
  )
}

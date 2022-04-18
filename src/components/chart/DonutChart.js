import React from 'react';
import Chart from "react-apexcharts";

export const DonutChart = () => {
    const state = {
          
        series: [15, 55, 30],
        options: {
            labels: ["Direct", "Social", "Referral"],
            chart: {
                width: 380,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            }
        },
          
          
    };
  return (
      <div className='donut-chart bg-white border border-1 rounded'>
          <Chart
              options={state.options}
              series={state.series}
              type="donut"
          />
    </div>
  )
}

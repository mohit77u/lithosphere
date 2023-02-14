import React from 'react'
import ReactApexChart from "react-apexcharts";


export default function CurrencyChart() {
    const data = [
        200,
        400,
        500,
        300,
        700,
        800,
        100,
        400,
        350,
        600,
        400,
        350, 
        400,
        500,
        300,
        700,
        800,
        100,
        400,
        350,
        600,
        400,
        350,   
      ];
    const series = [ 
    //data on the y-axis
    {
      name: "",
      data: data
    }
  ];
  const options = { 
    //data on the x-axis
    chart: { 
      id: 'bar-chart',
      toolbar: {
        show: true,
        tools:{
          download: false 
        }
      }
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "12px",
      }
    },
    fill: {
      colors: ['#665cd1'],
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    plotOptions: {
      bar: {
          horizontal: false,
          borderRadius: 3,
      }
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
          enabled: true,
          delay: 150
      },
      dynamicAnimation: {
          enabled: true,
          speed: 350
      }
    },
    xaxis: {
      categories: data,
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
    },
  };
  return (
    <div className='chart'>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="365"
        />
    </div>
  )
}

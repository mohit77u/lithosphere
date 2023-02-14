import React from 'react'
import ReactApexChart from "react-apexcharts";


export default function EthChart(props) {
    const data = [
      400,
      800,
      10,
      300,
      350,
      900,  
      100,
      350,
      400,  
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
      id: 'eth-chart',
      toolbar: {
        show: false,
        tools:{
          download: false 
        }
      }
    },
    stroke: {
        curve: 'smooth',
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#7c71f1'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [100, 0, 100, 0]
        },
      },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
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
      categories: [],
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
          type="line"
          width="120"
          height={props.height ?? "130"}
        />
    </div>
  )
}

import React from 'react'
import ReactApexChart from "react-apexcharts";


export default function MarketOverViewChart() {
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
      id: 'ltc-chart',
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
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: ['#5e5e5f'],
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#5e5e5f',
          opacity: 0.9,
        },
      }
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#5e5e5f'],
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
          show: true
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
      categories: ['7/12','8/12','9/12','10/12','11/12','12/12','13/12','14/12','15/12'],
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      labels: {
        show: true,
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
        show: true,
      }
    },
  };
  return (
    <div className='chart'>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          width="100%"
          height="300"
        />
    </div>
  )
}

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Styles from './CourseProgress.module.css';

const BarGraph = ({ data, categories }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const values = data.map((day) => ({
      value: day.totalQuestions,
      itemStyle: {
        color: day.color,
      },
      subject: day.subject,  
      easy: day.easyQuestions,
      medium: day.mediumQuestions,
      hard: day.hardQuestions,
    }));

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const { subject, value, easy, medium, hard } = params.data;
          
          let content = `<b>${subject}</b><br/>`; 
          content += `<b>Total Questions:</b> ${value}<br/>`; 
          content += `Easy: ${easy} questions<br/>`; 
          content += `Medium: ${medium} questions<br/>`; 
          content += `Hard: ${hard} questions<br/>`;
          
          return content;
        },
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        textStyle: {
          color: '#333', 
          fontSize: 10,
        },
      },
      xAxis: {
        type: 'category',
        data: categories,
        axisLabel: {
          show: true,
          color: '#333',
          fontSize: 8,
          interval: 0, 
          margin: 10, 
        },
        axisLine: {
          show: false, 
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          data: values,
          type: 'bar',
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
          },
          label: {
            show: true, 
            position: 'insideTop',
            align: 'center',
            verticalAlign: 'top', 
            distance: 5, 
            color: '#fff', 
            fontSize: 8, 
            formatter: '{c}',
          },
        },
      ],
    };

    myChart.setOption(option);

    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
      myChart.dispose();
    };
  }, [data, categories]);

  return <div ref={chartRef} className={Styles.container} />;
};

export default BarGraph;

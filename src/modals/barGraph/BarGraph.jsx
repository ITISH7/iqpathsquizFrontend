import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Styles from './BarGraph.module.css';

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
      subjects: day.subjects,
    }));

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const { subjects } = params.data;
          let content = `<b>Total Questions: ${params.data.value}</b><br/>`;

          subjects.forEach((subject) => {
            // console.log(subject);
            content += `<b>${subject.subject}</b>:<br/>`;
            subject.topics.forEach((topic) => {
              content += `${topic.name}: ${topic.questions} questions<br/>`;
            });
          });
          return content;
        },
        backgroundColor: 'rgba(255,255,255,0.9)', // Customize the tooltip background
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        textStyle: {
          color: '#333', // Customize the text color
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
          interval: 0, // Show all labels
          margin: 10, // Control space between label and bars
        },
        axisLine: {
          show: false, // Hide the x-axis line
        },
        axisTick: {
          show: false, // Hide ticks
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
            shadowColor: 'rgba(0, 0, 0, 0.25)', // Set the shadow color and opacity
          },
          label: {
            show: true, // Show values on bars
            position: 'insideTop', // Position at top of the bar
            align: 'center', // Horizontally center the label
            verticalAlign: 'top', // Vertically align at the top
            distance: 5, // Space between label and bar edge
            color: '#fff', // Text color
            fontSize: 8, // Font size of the label
            formatter: '{c}', // Display the data value
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

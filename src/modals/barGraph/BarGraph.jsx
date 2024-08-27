import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Styles from './BarGraph.module.css';

const BarGraph = ({ data, categories }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: 'category',
        data: categories,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: data,
          type: 'bar',
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data, categories]);

  return <div ref={chartRef} className={Styles.container} />;
};

export default BarGraph;

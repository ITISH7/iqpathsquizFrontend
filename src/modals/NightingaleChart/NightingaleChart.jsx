import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import styles from './NightingaleChart.module.css';

const NightingaleChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('nightingale-chart');
    const myChart = echarts.init(chartDom);

    const option = {
      legend: {
        top: 'bottom',
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [30, 120],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: 'DSA' },
            { value: 38, name: 'Aptitude' },
            { value: 32, name: 'C++' },
            { value: 30, name: 'Python' },
            { value: 28, name: 'Machine Learning' },
            { value: 26, name: 'Quant' },
            { value: 22, name: 'Javascript' },
            { value: 18, name: 'React' },
          ],
        },
      ],
    };

    myChart.setOption(option);

    // Cleanup on unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="nightingale-chart" className={styles.container} style={{ width: '100%', height: '100%' }} />;
};

export default NightingaleChart;

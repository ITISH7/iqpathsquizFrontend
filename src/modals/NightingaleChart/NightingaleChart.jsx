import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import styles from './NightingaleChart.module.css';

const NightingaleChart = ({ data }) => {
  useEffect(() => {
    const chartDom = document.getElementById('nightingale-chart');
    const myChart = echarts.init(chartDom);

    const option = {
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
          label: {
            show: true,
            formatter: '{b}',  // Display full label with value
            position: 'outside',   // Place labels outside the chart
            fontSize: 14,
            color: 'rgb(174, 55, 211)',
            // overflow: 'break',    // Break the text to avoid ellipsis
            alignTo: 'labelLine',  // Align the label with the line
            distanceToLabelLine: 5, // Control the distance to the label line
          },
          labelLine: {
            show: true,
            length: 5,    // Shorten the first segment of the label line
            length2: 5,   // Shorten the second segment of the label line
            smooth: true, // Make the line smooth
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              
            },
            label: {
              fontSize: 18,  // Increase the font size on hover
              fontWeight: 'bold',
              color: 'rgb(174, 55, 211)', // Highlight label color on hover
              overflow: 'break', // Prevent ellipsis even on hover
            },
          },
          data: data,
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

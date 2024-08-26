import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './doughnut.module.css';
import dummyData from './dummyData';

const DoughnutChart = () => {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            data: dummyData.filter(item => item.name).map(item => ({
                name: item.name,
                icon: 'none',
            })),
            textStyle: {
                rich: {
                    rect: {
                        height: 20,
                        width: 20,
                        align: 'center',
                        verticalAlign: 'middle',
                        color: '#000',
                        fontSize: 8,
                        fontWeight: 550,
                        borderRadius: 4,
                        padding: [3, 3],
                        backgroundColor: '#b3b7f9',
                    },
                    name: {
                        color: '#000',
                        fontSize: 14,
                        fontWeight: 550,
                        padding: [0, 0, 0, 4],
                    }
                }
            },
            left: '60%', // Position the legend on the right
        },
        series: [
            {
                name: 'Difficulty',
                type: 'pie',
                radius: ['70%', '90%'],
                center: ['30%', '50%'], // Position the pie chart on the left
                avoidLabelOverlap: false,
                startAngle: 90,
                clockwise: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: '17/20',
                    fontSize: 16,
                    color: '#000',
                },
                data: dummyData.map(item => ({
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: item.color,
                        borderRadius: item.borderRadius,
                    },
                })),
            },
        ],
    };

    option.legend.formatter = (name) => {
        const item = dummyData.find((item) => item.name === name);
        const percentage = ((item.value / dummyData.reduce((acc, cur) => acc + cur.value, 0)) * 100);

        return `{rect|${percentage}%} {name| ${name} }`;
    };

    return (
        <div className={styles.container}>
            <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
        </div>
    );
};

export default DoughnutChart;


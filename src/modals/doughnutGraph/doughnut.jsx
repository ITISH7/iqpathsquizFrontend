import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './doughnut.module.css';

const DoughnutChart = ({ data = [], centerLabel = '' }) => {
    const chartRef = useRef(null);

    // Dynamically create rich text styles for each legend item
    const dynamicRichText = data.reduce((richText, item, index) => {
        richText[`rect${index}`] = {
            height: 20,
            width: 20,
            align: 'center',
            verticalAlign: 'middle',
            color: item.textColor || '#000', // Text color from data
            fontSize: 8,
            fontWeight: 550,
            borderRadius: 4,
            padding: [3, 3],
            backgroundColor: item.color || '#b3b7f9', // Dynamic background color from data
        };
        richText[`name${index}`] = {
            color: '#000',
            fontSize: 12,
            fontWeight: 550,
            padding: [0, 0, 0, 4],
        };
        return richText;
    }, {});

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)',
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            data: data?.filter((item) => item.name).map((item) => ({
                name: item.name,
                icon: 'none',
            })),
            textStyle: {
                rich: dynamicRichText,
            },
            left: '55%', // Position the legend on the right
        },
        series: [
            {
                name: 'difficulty',
                type: 'pie',
                radius: ['70%', '90%'],
                center: ['30%', '50%'], // Position the pie chart on the left
                avoidLabelOverlap: true,
                startAngle: 90,
                clockwise: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: centerLabel,
                    fontSize: 16,
                    color: '#000',
                },
                data: data?.map((item) => ({
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: item.color, // Use the color from the data
                        borderRadius: item.borderRadius,
                    },
                })),
            },
        ],
    };

    // Legend formatter to apply rich text styles dynamically
    option.legend.formatter = (name) => {
        const itemIndex = data?.findIndex((item) => item.name === name);
        const item = data[itemIndex];
        const totalValue = data?.reduce((acc, cur) => acc + (cur.value || 0), 0);
        const percentage = totalValue && item?.value 
            ? ((item.value / totalValue) * 100).toPrecision(2) 
            : 0;

        // Dynamically reference the rich text style created earlier
        return `{rect${itemIndex}|${percentage}%} {name${itemIndex}|${name}}`;
    };

    // Handle chart resizing on window resize
    useEffect(() => {
        const resizeChart = () => {
            if (chartRef.current) {
                chartRef.current.getEchartsInstance().resize();
            }
        };

        window.addEventListener('resize', resizeChart);

        return () => {
            window.removeEventListener('resize', resizeChart);
        };
    }, []);

    return (
        <div className={styles.container}>
            <ReactEcharts
                ref={chartRef}
                option={option}
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    );
};

export default DoughnutChart;

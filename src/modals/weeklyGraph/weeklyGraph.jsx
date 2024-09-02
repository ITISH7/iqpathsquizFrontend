import React, {useEffect} from 'react';
import ReactEcharts from 'echarts-for-react';
import Styles from './WeeklyGraph.module.css';

const WeeklyGraph = ({ value, maxValue }) => {
    const percentage = (value / maxValue) * 100;

    const option = {
        series: [
            {
                type: 'pie',
                radius: ['70%', '90%'],  
                avoidLabelOverlap: false,
                startAngle: 90,  
                clockwise: true,  
                hoverAnimation: false,
                label: {
                    show: true,
                    position: 'center',
                    formatter: value.toFixed(1),  // Display the value with one decimal
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: '#000',
                },
                data: [
                    {
                        value: percentage, name: 'Progress',
                        itemStyle: {
                            color: 'rgba(30,144,255,1)',  // Use the passed color or default to blue
                            borderRadius: [10, 10, 10, 10],  // Rounded edges for the progress bar
                        }
                    },
                    {
                        value: 100 - percentage, name: 'Remaining',
                        itemStyle: {
                            color: 'rgba(30,144,255,0.2)',  // Light blue color for the remaining part
                            borderRadius: [10, 10, 10, 10],  // Rounded edges for the remaining part
                        }
                    },
                ],
            },
        ],
    };

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
        <div className={Styles.container}>
            <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
        </div>
    );
};

export default WeeklyGraph;

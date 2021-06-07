import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import ApexChart from 'react-apexcharts';

const chartOptions = {
    pie: {
        series: [60, 30, 10],
        options: {
            chart: {
                width: 330,
                type: 'pie',
            },
            colors: ['#2BC9BB', '#E4948F', '#BCD75F'],
            labels: ['Ref', 'Following', 'Follower'],
            legend: {
                position: 'bottom',
            },
        },
    },
    line: {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                id: 'basic-bar',
                zoom: {
                    enabled: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#2BC9BB',
                            opacity: 1,
                        },
                        {
                            offset: 100,
                            color: '#FFDD34',
                            opacity: 1,
                        },
                    ],
                },
            },
            xaxis: {
                categories: ['19 May', '20 May', '21 May', '22 May', '23 May', '24 May', '25 May'],
            },
            stroke: {
                curve: 'smooth',
            },
        },

        series: [
            {
                name: 'Balance',
                data: [10, 40, 20, 50, 0, 100, 30],
            },
        ],
    },
};

const Chart = memo(({type, width = 340, ...rest}) => {
    const {t} = useTranslation();
    const {options, series} = chartOptions[type];
    return <ApexChart options={options} series={series} type={type} width={width} {...rest}/>;
});

export default Chart;

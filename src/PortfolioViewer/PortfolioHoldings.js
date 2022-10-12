import React from "react";
import PieChart from '../Functions/Charts/PieChart'

function PortfolioHoldings(props) {

    const data = {
        labels: [
            'AMC',
            'APE'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [900, 150],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }],
    };

    const chartOptions = {
        plugins: {
            datalabels: {
                display: true,
                font: {
                    weight: 'bold',
                },
                color: '#ffffff',
            },
            legend: {
                display: false
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className='card my-card portfolio-holdings-chart'>
            <PieChart data={data} options={chartOptions} />
        </div>
    )
}

export default PortfolioHoldings;
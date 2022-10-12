import { Bar } from "react-chartjs-2"
import React from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function BarChart() {

    const data = {
        labels: ["Red", "Green", "Blue"],
        datasets: [
            {
                label: "My Chart",
                data: [10, 20, 30],
                backgroundColor: ["#FF6384", "#36AEB", "FFCE56"],
            }
        ]
    }
    return (
        <div className="maximize">
            <Bar data={data} />
        </div>
    )

}

export default BarChart;

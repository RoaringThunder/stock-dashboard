import { Line } from "react-chartjs-2"
import React from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LineChart() {

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
            <Line data={data} />
        </div>
    )

}

export default LineChart;
import React from 'react';
import PropTypes from 'prop-types';
import {
    ArcElement,
    Chart,
    PieController,
    Legend,
    Tooltip,
    Title,

} from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    PieController,
    Legend,
    Tooltip,
    Title,
);

PieChart.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
};

PieChart.defaultProps = {
    height: 'auto',
};

function PieChart(props) {
    const { data, options, height } = props;

    return (
        <>
            <div className="row">
                <div className="col-12 noPadding text-center" style={{ height: `${height}` }} >
                    {(Object.entries(data).length > 0) ?
                        < Pie data={data} options={options} />
                        :
                        <div className="alert alert-info app-alert-message">No Data</div>
                    }
                </div>
            </div>
        </>
    )
}

export default PieChart;
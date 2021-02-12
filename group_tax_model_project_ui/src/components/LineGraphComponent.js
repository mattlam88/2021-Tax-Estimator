import React from 'react';
import Highcharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

function GraphComponent(props) {

    return (
        <React.Fragment>
            {props.name} - {props.income} - {props.state}
        </React.Fragment>
    )
}

export default GraphComponent;
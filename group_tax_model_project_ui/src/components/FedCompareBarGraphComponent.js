import React from 'react';
import Highcharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

function FedCompareBarGraphComponent(props) {

    return (
        <React.Fragment>
           Biden - {props.biden}<br />
           Trump - {props.trump}
        </React.Fragment>
    )
}

export default FedCompareBarGraphComponent;
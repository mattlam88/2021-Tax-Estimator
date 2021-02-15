import React, { useState, useEffect } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';

function FedCompareBarGraphComponent(props) {

    const options = {
        chart: {
          type: 'column'
        },
        title: {
            text: 'Federal Tax Liability'
        },
        subtitle: {
            text: 'Biden v. Trump'
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tax Liability (US$)'
            }
        },
        legend: {
            enabled: false
        },
        colors: [
            'blue', 
            'red'
            ],
            
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        series: [{
            data: [
                ['Biden', 12000],
                ['Trump', 12000]
            ],
        }]
    };

    return (
        <React.Fragment>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </React.Fragment>
    )
}

export default FedCompareBarGraphComponent;
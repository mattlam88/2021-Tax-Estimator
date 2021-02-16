import React, { useState, useEffect } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';

function FedStateCompareBarGraphComponent(props) {

    const income = props.income;
    var stateName = props.stateName;

    const [bidenFedStateTaxes, setBidenFedStateTaxes] = useState(0);

    const [trumpFedStateTaxes, setTrumpFedStateTaxes] = useState(0);

    function handleResponse(response) {
        console.log(response);
        setBidenFedStateTaxes(response.data.Biden);
        setTrumpFedStateTaxes(response.data.Trump);
    }

    useEffect(() => {
        axios.get('/fedStateIncomeTaxComparison', {
            params: {
                income: income,
                stateTax: stateName
            }
        })
        .then(handleResponse);
    }, [income, stateName]);

    const options = {
        chart: {
          type: 'column'
        },
        title: {
            text: 'Federal and State Tax Liability'
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
                ['Biden', bidenFedStateTaxes],
                ['Trump', trumpFedStateTaxes]
            ],
        }]
    };

    return (
        <React.Fragment>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </React.Fragment>
    )
}

export default FedStateCompareBarGraphComponent;
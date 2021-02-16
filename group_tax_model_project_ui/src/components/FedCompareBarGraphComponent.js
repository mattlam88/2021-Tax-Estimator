import React, { useState, useEffect} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';

function FedCompareBarGraphComponent(props) {

    const income = props.income;

    const [bidenFedTaxes, setBidenFedTaxes] = useState(0);

    const [trumpFedTaxes, setTrumpFedTaxes] = useState(0);

    function handleResponse(response) {
        console.log(response);
        setBidenFedTaxes(response.data.user_biden_tax);
        setTrumpFedTaxes(response.data.user_trump_tax);
    }

    useEffect(() => {
        axios.get('/federalTaxComparison', {
            params: {
                income: income
            }
        })
        .then(handleResponse);
    }, [income]);

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
                ['Biden', bidenFedTaxes],
                ['Trump', trumpFedTaxes]
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
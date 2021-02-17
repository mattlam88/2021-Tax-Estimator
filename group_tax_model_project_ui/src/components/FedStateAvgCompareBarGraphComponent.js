import React, { useState, useEffect} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';

function FedStateAvgCompareBarGraphComponent(props) {

    const stateName = props.stateName;

    const [data, setData] = useState({})

    function handleResponse(response) {
        console.log(response);
        setData(response.data);
    }

    useEffect(() => {
        axios.get('/fedStateIncomeTaxRateComparison', {
            params: {
                stateTax: stateName
            }
        })
        .then(handleResponse);
    }, [stateName]);

    const options = {
        chart: {
          type: 'column'
        },
        title: {
            text: 'Federal/State Tax Bracket Comparison'
        },
        subtitle: {
            text: 'Biden v. Trump'
        },
        xAxis: {
            categories: [
                '0 - $9,875',
                '$9,876 - $40,125',
                '$40,125 - $85,525',
                '$85,526 - $163,300',
                '$163,301 - $207,350',
                '$207,351 - $518,400',
                '$518,401 +'
            ],
            crosshair: true
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
        series: [{
            name: 'Biden',
            data: [data.Biden_1, data.Biden_2, data.Biden_3, data.Biden_4, data.Biden_5, data.Biden_6, data.Biden_7]
        },
        {
            name: 'Trump',
            data: [data.Trump_1, data.Trump_2, data.Trump_3, data.Trump_4, data.Trump_5, data.Trump_6, data.Trump_7]
        }]
    };

    return (
        <React.Fragment>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </React.Fragment>
    )
}

export default FedStateAvgCompareBarGraphComponent;
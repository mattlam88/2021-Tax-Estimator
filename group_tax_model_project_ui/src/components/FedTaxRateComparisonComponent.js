import React, { useState, useEffect} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';

function FedTaxRateComparisonComponent() {

    const [data, setData] = useState({
        Biden_1: 1,
        Biden_2: 1,
        Biden_3: 1,
        Biden_4: 1,
        Biden_5: 1,
        Biden_6: 1,
        Biden_7: 1,
        Trump_1: 1,
        Trump_2: 1,
        Trump_3: 1,
        Trump_4: 1,
        Trump_5: 1,
        Trump_6: 1,
        Trump_7: 1
    })

    function handleResponse(response) {
        console.log(response);
        setData(response.data);
    }

    useEffect(() => {
        axios.get('/federalTaxRateComparison')
        .then(handleResponse);
    }, []);

    const options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Federal Tax Rate Comparison'
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
        },
        yAxis: {
            title: {
                text: 'Tax Rate (%)'
            }
        },
        colors: [
            'blue', 
            'red'
            ],
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Biden',
            data: [data.Biden_1.fed_tax_rate, data.Biden_2.fed_tax_rate, data.Biden_3.fed_tax_rate, data.Biden_4.fed_tax_rate, data.Biden_5.fed_tax_rate, data.Biden_6.fed_tax_rate, data.Biden_7.fed_tax_rate]
        },
        {
            name: 'Trump',
            data: [data.Trump_1.fed_tax_rate, data.Trump_2.fed_tax_rate, data.Trump_3.fed_tax_rate, data.Trump_4.fed_tax_rate, data.Trump_5.fed_tax_rate, data.Trump_6.fed_tax_rate, data.Trump_7.fed_tax_rate]
        }]
    };

    return (
        <React.Fragment>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </React.Fragment>
    )
}

export default FedTaxRateComparisonComponent;
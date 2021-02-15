import React from 'react';
// import {CanvasJSChart} from 'canvasjs-react-charts'

function FedCompareBarGraphComponent(props) {

    const biden = props.biden;
    const trump = props.trump;

    

    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Federal Tax Due"
        },
        axisX: {
            title: "Biden v. Trump"
        },
        axisY: {
            title: "Fed. Tax Due",
            includeZero: true
        },
        data: [{
            type: "column",
            dataPoints: [
                { y:  biden, label: "Biden", color: "blue" },
                { y:  trump, label: "Trump", color: "red" }
            ]
        }]
    }

    return (
       <React.Fragment>
           
       </React.Fragment>
    )
}

export default FedCompareBarGraphComponent;
import React from 'react';

function GraphComponent(props) {

    return (
        <React.Fragment>
            {props.name} - {props.income} - {props.state}
        </React.Fragment>
    )
}

export default GraphComponent;
import React, { useState } from 'react';
import { Container} from 'reactstrap';
import Slider from 'react-rangeslider';
import NumberFormat from 'react-number-format';
import 'react-rangeslider/lib/index.css';

function IncomeComponent() {

    const [volume, setVolume] = useState(0);
    
    const lab = {100000: '$100,000', 200000: '$200,000', 300000: '$300,000',
        400000: '$400,000', 500000: '$500,000', 600000: '$600,000', 700000: '$700,000',
        800000: '$800,000', 900000: '$900,000', 1000000: '$1,000,000'}
    
    function onChange(value) {
        setVolume(value);
    }

    return (
        <React.Fragment>
            <Container>
                <div style={{textAlign: 'center'}}> 
                    <NumberFormat value={volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </div>
            <Slider
                    value={volume}
                    min={0}
                    max={1000000}
                    step={10000}
                    orientation={"horizontal"}
                    labels={lab}
                    onChange={onChange}
                />
            </Container>
        </React.Fragment>
    )
}

export default IncomeComponent;
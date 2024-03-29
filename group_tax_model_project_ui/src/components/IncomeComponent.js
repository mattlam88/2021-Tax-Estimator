import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Slider from 'react-rangeslider';
import NumberFormat from 'react-number-format';
import 'react-rangeslider/lib/index.css';
import FedCompareBarGraphComponent from './FedCompareBarGraphComponent';
import FedStateCompareBarGraphComponent from './FedStateCompareBarGraphComponent';
import FedTaxRateComparisonComponent from './FedTaxRateComparisonComponent';
import FedStateAvgCompareBarGraphComponent from './FedStateAvgCompareBarGraphComponent';

function IncomeComponent() {

    const [income, setIncome] = useState(1);

    const [stateName, setStateName] = useState('AL');

    const lab = {
        100000: '$100,000', 200000: '$200,000', 300000: '$300,000',
        400000: '$400,000', 500000: '$500,000', 600000: '$600,000', 700000: '$700,000',
        800000: '$800,000', 900000: '$900,000', 1000000: '$1,000,000'}

    const states = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 
        'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 
        'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ]

    
    function onChange(value) {
        setIncome(value);
    }

    function handleChange(e) {
        e.preventDefault();
        let inc_state = e.target.value;
        setStateName(inc_state);
    }

    return (
        <React.Fragment>
            <Container>
                <Row className="mb-5">
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            Income:&nbsp;&nbsp;
                            <NumberFormat value={income} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </div>
                        <Slider
                            value={income}
                            min={0}
                            max={1000000}
                            step={10000}
                            orientation={"horizontal"}
                            tooltip={false}
                            labels={lab}
                            onChange={onChange}
                        />
                    </Col>
                </Row>

                <Row className="mb-5 mt-5">
                    <Col md={5}></Col>
                    <Col md={2}>
                        <div style={{ textAlign: 'center' }}>
                            State of Residence:&nbsp;&nbsp;
                            <Form onChange={handleChange} value={stateName}>
                            <FormGroup>
                                <Input type="select" name="select">
                                    {states.map(state => 
                                        <option>{state}</option>
                                    )}
                                </Input>
                            </FormGroup>
                            </Form>
                        </div>
                    </Col>
                    <Col md={5}></Col>
                </Row>
                <Row>
                    <Col className="block-example border border-dark p-3 m-3">
                        <FedCompareBarGraphComponent income={income}/>
                    </Col>
                    <Col className="block-example border border-dark p-3 m-3">
                        <FedTaxRateComparisonComponent income={income}/>
                    </Col>
                </Row>
                <Row> 
                    <Col className="block-example border border-dark p-3 m-3">
                        <FedStateCompareBarGraphComponent income={income} stateName={stateName}/>
                    </Col>
                    <Col className="block-example border border-dark p-3 m-3">
                        <FedStateAvgCompareBarGraphComponent stateName={stateName} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default IncomeComponent;

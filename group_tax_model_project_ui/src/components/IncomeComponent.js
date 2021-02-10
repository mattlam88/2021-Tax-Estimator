import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Slider from 'react-rangeslider';
import NumberFormat from 'react-number-format';
import 'react-rangeslider/lib/index.css';
import axios from 'axios'
import FedTaxDueComp from './Graph_Components/FedTaxDueComp';
import FedRateComp from './Graph_Components/FedRateComp';
import FedAndStateTaxDue from './Graph_Components/FedAndStateTaxDue';
import FedAndStateRateComp from './Graph_Components/FedAndStateRateComp.js'
// Will need to import the four graph componenets.

function IncomeComponent() {

    const [income, setIncome] = useState(0);

    const [stateTax, setStateTax] = useState('');

    const lab = {
        100000: '$100,000', 200000: '$200,000', 300000: '$300,000',
        400000: '$400,000', 500000: '$500,000', 600000: '$600,000', 700000: '$700,000',
        800000: '$800,000', 900000: '$900,000', 1000000: '$1,000,000'
    }

    // const states = [
    //     AL, AK, AZ, AR, CA, CO, CT, DE, DC, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH,
    //     NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY
    // ]

    // the array above is causing an error, what will this be used for?

    function onChange(value) {
        setIncome(value);

        axios
        .post(`/retrieveIncome/${income}/>`)
        .then(result => {
            console.log(result)
          })
        .catch(error => {
            console.log(error)
          });
    }

    function handleChange(e) {
        setStateTax(e.target.value);
        console.log(stateTax);
        // add axios post call
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
                            <Form onChange={handleChange} value={stateTax}>
                                <FormGroup>
                                    <Input type="select" name="select">
                                        <option>AZ</option>
                                        <option>AL</option>
                                        <option>AK</option>
                                        <option>AR</option>
                                        <option>CA</option> 
                                        <option>CO</option>
                                        <option>CT</option>
                                        <option>DE</option>
                                        <option>DC</option>
                                        <option>FL</option>
                                        <option>GA</option>
                                        <option>HI</option>
                                        <option>ID</option>
                                        <option>IL</option>
                                        <option>IN</option>
                                        <option>IA</option>
                                        <option>KS</option>
                                        <option>KY</option>
                                        <option>LA</option>
                                        <option>ME</option>
                                        <option>MD</option>
                                        <option>MA</option>
                                        <option>MI</option>
                                        <option>MN</option>
                                        <option>MS</option>
                                        <option>MO</option>
                                        <option>MT</option>
                                        <option>NE</option>
                                        <option>NV</option>
                                        <option>NH</option>
                                        <option>NJ</option>
                                        <option>NM</option>
                                        <option>NY</option>
                                        <option>NC</option>
                                        <option>ND</option>
                                        <option>OH</option>
                                        <option>OK</option>
                                        <option>OR</option>
                                        <option>PA</option>
                                        <option>RI</option>
                                        <option>SC</option>
                                        <option>SD</option>
                                        <option>TN</option>
                                        <option>TX</option>
                                        <option>UT</option>
                                        <option>VT</option>
                                        <option>VA</option>
                                        <option>WA</option>
                                        <option>WV</option>
                                        <option>WI</option>
                                        <option>WY</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                    <Col md={5}></Col>
                </Row>
                <Row>
                    <Col className="block-example border border-dark p-3 m-3">
                        Graph 1
                        <FedTaxDueComp userIncome={income} jursidiction={stateTax}/>
                    </Col>
                    <Col className="block-example border border-dark p-3 m-3">
                        Graph 2
                        <FedRateComp />
                    </Col>
                </Row>
                <Row>
                    <Col className="block-example border border-dark p-3 m-3">
                        Graph 3
                        <FedAndStateTaxDue userIncome={income} jursidiction={stateTax}/>
                    </Col>
                    <Col className="block-example border border-dark p-3 m-3">
                        Graph 4
                        <FedAndStateRateComp jursidiction={stateTax}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default IncomeComponent;

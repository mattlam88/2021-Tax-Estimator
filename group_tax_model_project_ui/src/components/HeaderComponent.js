import React from 'react';
import { Jumbotron } from 'reactstrap';

function HeaderComponent() {
    return(
        <Jumbotron>
            <h1 className="display-3">Tax Model Project</h1>
            <p className="lead">This site allows you to compare approximate tax liabilities under the Trump and Biden tax plans.</p>
        </Jumbotron>
    )
}

export default HeaderComponent;
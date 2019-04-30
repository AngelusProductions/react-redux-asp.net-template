import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form'

class FormsContainer extends Component {

    render() {
        return (
            <div>
                <Form />
            </div>
        );
    }
}

export default connect()(FormsContainer);

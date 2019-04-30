import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../components/Table'

class TablesContainer extends Component {

    render() {
        return (
            <div>
                <Table />
            </div>
        );
    }
}

export default connect()(TablesContainer);

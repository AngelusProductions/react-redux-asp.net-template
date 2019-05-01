import React, { Component } from 'react'
import { connect } from 'react-redux'

import EmployeesTable from '../components/EmployeesTable'

class TablesContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <EmployeesTable />
            </React.Fragment>
        )
    }
}

export default connect()(TablesContainer)

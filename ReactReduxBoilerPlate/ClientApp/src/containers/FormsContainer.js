import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from '../components/Form'

class FormsContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Form />
            </React.Fragment>
        )
    }
}

export default connect()(FormsContainer)

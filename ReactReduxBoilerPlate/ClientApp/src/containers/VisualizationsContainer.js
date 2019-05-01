import React, { Component } from 'react'
import { connect } from 'react-redux'

import Visualization from '../components/Visualization'

class VisualizationsContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Visualization />
            </React.Fragment>
        )
    }
}

export default connect()(VisualizationsContainer)

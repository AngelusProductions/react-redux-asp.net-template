import React from 'react'
import { connect } from 'react-redux'

const Visualization = props => (
    <React.Fragment>
        <img src="https://i.stack.imgur.com/v1PXa.jpg" alt="visualization" />
    </React.Fragment>
)

export default connect()(Visualization)

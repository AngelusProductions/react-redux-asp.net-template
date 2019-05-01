import React from 'react'
import { connect } from 'react-redux'

const Profile = props => (
    <React.Fragment>
        <h1>Angelus Productions</h1>
        <p>I'm a big boy</p>
        <img src="https://avatars0.githubusercontent.com/u/43078660?s=460&v=4" alt="corey" />
    </React.Fragment>
)


export default connect()(Profile)

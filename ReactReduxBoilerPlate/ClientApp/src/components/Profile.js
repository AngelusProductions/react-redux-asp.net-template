﻿import React from 'react'
import { connect } from 'react-redux'
import '../css/Profile.css'

const Profile = props => (
    <React.Fragment>
        <img 
            src="https://avatars0.githubusercontent.com/u/43078660?s=460&v=4" 
            className="profile-photo"
            alt="profile photo" 
        />
        <div className="profile-text">
            <h1>Angelus Productions</h1>
            <p>I'm a big boy</p>
        </div>
    </React.Fragment>
)


export default connect()(Profile)

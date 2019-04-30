import React, { Component } from 'react';
import { connect } from 'react-redux';

const Profile = props => (
    <div>
        <h1>Angelus Productions</h1>
        <p>I'm a big boy</p>
    </div>
)


export default connect()(Profile);

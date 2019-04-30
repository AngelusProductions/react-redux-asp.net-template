import React from 'react';
import { connect } from 'react-redux';

const Visualization = props => (
    <div><img src="https://i.stack.imgur.com/v1PXa.jpg" alt="visualization"/></div>
);

export default connect()(Visualization);

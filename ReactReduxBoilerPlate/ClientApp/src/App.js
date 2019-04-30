import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';

import LandingPage from './components/LandingPage';
import FormsContainer from './containers/FormsContainer'
import TablesContainer from './containers/TablesContainer'
import VisualizationsContainer from './containers/VisualizationsContainer'
import Form from './components/Form'
import Table from './components/Table'
import Visualization from './components/Visualization'
import SignIn from './components/SignIn'
import Profile from './components/Profile'

export default () => (
  <Layout>
    <Route exact path='/' component={LandingPage} />

    <Route path='/forms' component={FormsContainer} /> 
    <Route path='/forms/:id' component={Form} />

    <Route path='/tables' component={TablesContainer} /> 
    <Route path='/tables/:id' component={Table} />

    <Route path='/visualizations' component={VisualizationsContainer} /> 
    <Route path='/visualizations/:id' component={Visualization} /> 

    <Route path='/signin' component={SignIn} /> 

    <Route path='/users/:id' component={Profile} /> 
  </Layout>
);

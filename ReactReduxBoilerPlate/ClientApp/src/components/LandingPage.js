import React from 'react'
import { connect } from 'react-redux'

const LandingPage = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h1><br/>NESS Web App Studio</h1>
                <p><br/><em>Welcome to this little cheat sheet to get web-based applications up and running</em>.<br/><br/>What's in here?</p>
                  <ul>
                    <li><strong>Form Building</strong>. Click <em>Forms</em> for Q/A functionality for persisting to database.</li>
                    <li><strong>Table Templates</strong>. Click <em>Tables</em> to peruse some interactive table displays.</li>
                    <li><strong>Data Visualization</strong>. Click <em>Visualizations</em> for funky ways to represent client data.</li>
                    <li><strong>User Authentication</strong>. Click <em>Sign In</em> to start a session and <em>Profile</em> to check out your page.</li>
                  </ul>
                  <p>Here's the stack:</p>
                  <ul>
                      <li>Server-side: <a href='https://get.asp.net/'>ASP.NET Core</a> & <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a></li>
                      <li>Client-side: <a href='https://facebook.github.io/react/'>React</a> & <a href='https://redux.js.org/'>Redux</a></li>
                      <li>Styling: <a href='http://getbootstrap.com/'>Bootstrap</a></li>
                  </ul>
                 <p>Feel free to add to this, but make sure it all works first.<br />Let this be our <em>one source of truth</em>.</p>
                <img src="https://s3.amazonaws.com/ness-production/NESS_Logo.PNG" id="logo-landing-page" alt="ness"/>
           </div>
        </React.Fragment>
    )
};

export default connect()(LandingPage)

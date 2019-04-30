import React from 'react';
import { connect } from 'react-redux';
import './SignIn.css';

const SignIn = props => (
    <div className="wrapper fadeInDown">
        <div id="formContent">
            <div className="fadeIn first">
                <img src="https://s3.amazonaws.com/ness-production/NESS_Logo.PNG" id="icon" alt="ness" />
            </div>

            <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
    </div>
)


export default connect()(SignIn);

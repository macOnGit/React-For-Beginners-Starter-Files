/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory</p>
    <button type="button" className="github" onClick={() => props.authenticate('Github')}>
      Log In with Github
    </button>
    <button type="button" className="facebook" onClick={() => props.authenticate('Facebook')}>
      Log In with Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: Proptypes.func.isRequired,
};

export default Login;

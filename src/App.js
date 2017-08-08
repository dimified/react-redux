import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginLogout } from './actions/App';

const mapDispatchToProps = dispatch => (
  {
    onClick: () => {
      dispatch(loginLogout());
    }
  }
);

/**
 * (4) Whenever the state changes connect() takes care of letting
 * the application know about the state and map it to props.
 */
const mapStateToProps = state => {
  return {
    isLoggedIn: state.app.isLoggedIn
  };
};

class App extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    /**
     * (1) We dispatch an action directly in the view passing a callback through the properties.
     * (2) connect() is the glue which subscribes to the store and also gives us the possibility
     * to dispatch actions.
     */
    return (
      <div className="App">
        <button onClick={ this.props.onClick }>{ this.props.isLoggedIn ? 'Logout' : 'Login' }</button>
        <div>{ JSON.stringify(this.props) }</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

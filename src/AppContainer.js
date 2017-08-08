import { connect } from 'react-redux';
import { loginLogout } from './actions/App';
import App from './App';

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

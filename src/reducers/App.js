import {
  LOGINLOGOUT
} from '../actions/App';

const initialState = {
  isLoggedIn: false
};

/**
 * (3) The proper actions are registered through the combineReducers function
 * and triggered whenever the action is called. The store gets updated via pure-functions which
 * produces no side effects as it returns output based on the input instead of directly
 * modifying the external input.
 */
const app = (state = initialState, action) => {
  switch (action.type) {
    case LOGINLOGOUT:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      };
    default:
      return state;
  }
};

export default app;

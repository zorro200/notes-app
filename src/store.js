import { createStore, combineReducers, applyMiddleware } from 'redux';
import { noteReducer } from './reducers/noteReducer.js';
import { userReducer } from './reducers/userReducer.js';
import { filterReducer } from './reducers/filterReducer.js';
// Enables the store for ReduxDevTools on web browser
import { composeWithDevTools } from 'redux-devtools-extension';
// Redux middleware
import thunk from 'redux-thunk';

const reducer = combineReducers({
  notes: noteReducer,
  users: userReducer,
  filters: filterReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

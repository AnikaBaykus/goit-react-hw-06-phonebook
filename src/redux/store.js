import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import phoneBookReducer from './phonebook/phonebook-reducer';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const reducer = (state = {}, action) => {
//   return state;
// };

const reducer = combineReducers({
  contacts: phoneBookReducer,
});

// const phoneBookReducer = (state => );

export const store = createStore(reducer, composeWithDevTools());

import { combineReducers } from 'redux';
// import { ADD, DELETE, FILTER_CHANGE } from './phonebook-types';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterChange } from './phonebook-actions';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER_CHANGE:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

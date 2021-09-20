import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER_CHANGE } from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_CHANGE:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

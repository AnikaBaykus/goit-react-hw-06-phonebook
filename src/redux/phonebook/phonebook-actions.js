import { v4 as uuidv4 } from 'uuid';
// import * as types from './phonebook-types';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     name: name,
//     number: number,
//     id: uuidv4(),
//   },
// });

// export const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const filterChange = value => ({
//   type: types.FILTER_CHANGE,
//   payload: value,
// });

const addContact = createAction('contact/Add', (name, number) => ({
  payload: {
    name: name,
    number: number,
    id: uuidv4(),
  },
}));
const deleteContact = createAction('contact/Delete');
const filterChange = createAction('contact/FilterChange');

export { addContact, deleteContact, filterChange };

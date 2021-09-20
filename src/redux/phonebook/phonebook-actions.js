import { v4 as uuidv4 } from 'uuid';
import * as types from './phonebook-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name: name,
    number: number,
    id: uuidv4(),
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const filterChange = value => ({
  type: types.FILTER_CHANGE,
  payload: value,
});

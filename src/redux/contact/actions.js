import { 
  ADD_CONTACT,
  DELETE_CONTACT, 
  SAVE_EDIT_FIELDS, 
} from './types';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact  = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const saveEditFields = (id, fieldName, value) => ({
  type: SAVE_EDIT_FIELDS,
  payload: { id, fieldName, value },
 });
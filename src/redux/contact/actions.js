import { 
  ADD_CONTACT,
  DELETE_CONTACT, 
  SAVE_EDIT_NAME, 
  SAVE_EDIT_PHONE, 
  SAVE_EDIT_ADDRESS, 
  SAVE_EDIT_COMPANY, 
  SAVE_EDIT_EMAIL 
} from './types';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const delContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const saveEditName = (id, name)  => ({
  type: SAVE_EDIT_NAME,
  payload: { id, name },
});

export const saveEditPhone = (id, phone) => ({
	type: SAVE_EDIT_PHONE,
	payload: { id, phone },
});

export const saveEditAddress = (id, address) => ({
	type: SAVE_EDIT_ADDRESS,
	payload: { id, address },
});

export const saveEditCompany = (id, company) => ({
	type: SAVE_EDIT_COMPANY,
	payload: { id, company },
});

export const saveEditEmail = (id, email) => ({
	type: SAVE_EDIT_EMAIL,
	payload: { id, email },
});
import { FILTER_CONTACT } from "./types";

export const filterContact = contact => ({
  type: FILTER_CONTACT,
  payload: contact,
})
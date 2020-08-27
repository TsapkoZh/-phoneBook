import { FILTER_CONTACT } from "./types";

const initialState = 'a';

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACT:
      return action.payload;
    
    default: return state;
  }
} 
import { 
  ADD_CONTACT, 
  DELETE_CONTACT, 
  SAVE_EDIT_FIELDS, 
} from "./types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter(c =>(c.id !== action.payload));

    case SAVE_EDIT_FIELDS:
      return state.map(t => {
				if (t.id === action.payload.id) {
					[action.payload.nameField] = action.payload.value;
				}
				return t;
      });

    default: return state;
  }
} 
import { 
  ADD_CONTACT, 
  DELETE_CONTACT, 
  SAVE_EDIT_NAME, 
  SAVE_EDIT_PHONE, 
  SAVE_EDIT_ADDRESS,
  SAVE_EDIT_COMPANY,
  SAVE_EDIT_EMAIL, 
} from "./types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter(c =>(c.id !== action.payload));

    case SAVE_EDIT_NAME:
			return state.map(t => {
				if (t.id === action.payload.id) {
					t.name = action.payload.name;
				}
				return t;
      });
      
    case SAVE_EDIT_PHONE:
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.phone = action.payload.phone;
        }
        return t;
      });

    case SAVE_EDIT_ADDRESS:
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.address = action.payload.address;
        }
        return t;
      });

    case SAVE_EDIT_COMPANY:
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.company = action.payload.company;
        }
        return t;
      });

    case SAVE_EDIT_EMAIL:
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.email = action.payload.email
        }
        return t;
      });

    default: return state;
  }
} 
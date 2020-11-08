import { CREATE_NOTE } from "./types";

const initialState = {
  notes: [],
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: state.notes.concat([action.id]) };

    default:
      return state;
  }
};

import { CREATE_NOTE } from "./types";

export function createNote(id) {
  return {
    type: CREATE_NOTE,
    id,
  };
}

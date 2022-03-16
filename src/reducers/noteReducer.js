import { getAll, createNew } from '../services/notes';

export const noteReducer = (state = [], action) => {
  if (action.type === '@notes/init') {
    return action.payload;
  }

  if (action.type === '@notes/new') {
    return [...state, action.payload];
  }

  if (action.type === '@notes/toggle_important') {
    const { id } = action.payload;

    //Returns the entire list of notes, toggling the importance of the note that has been clicked
    return state.map(note => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important
        }
      }
      return note
    })
  }
  return state
}


// ACTIONS ==> send info for update redux store
// We do async functions as a return because we want to make wait the other part of
// code until we do something async. And because we want to communicate with a backend,
// passing through a middleware.

const createNote = content => {
  return async (dispatch) => {
    const newNote = await createNew(content)
    
    dispatch({
      type: '@notes/new',
      payload: newNote
    })
  }
}


const toggleImportanceOf = id => {
  return {
    type: '@notes/toggle_important',
    payload: { id }
  }
}

/**
 * Will send, to the store, all the notes that we have
 * on the server side
 *
 * @param {*} notes
 * @return {*}
 */
const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    
    dispatch({
      type: '@notes/init',
      payload: notes
    });
  }
}

export { createNote, toggleImportanceOf, initNotes }
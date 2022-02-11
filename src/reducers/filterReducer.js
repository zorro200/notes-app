import { getAll, getImportant, getNotImportant } from "../services/notes"

export const filterReducer = (state = [], action) => {
  if (action.type === '@filters/all') {
    console.log(action.payload);
    return [...state, action.payload];
  }

  if (action.type === '@filters/important') {
    return [...state, action.payload];
  }

  if (action.type === '@filters/notImportant') {
    return [...state, action.payload];
  }

  return state
}

const setImpAll = () => {
  return async (dispatch) => {
    const allNotes = await getAll();
    dispatch({
      type: '@filters/all',
      payload: allNotes
    });
  }
}

const setImpImp = () => {
  return async (dispatch) => {
    const impNotes = await getImportant();
    dispatch({
      type: '@filters/important',
      payload: impNotes
    });
  }
}

const setImpNotImp = () => {
  return async (dispatch) => {
    const notImpNotes = await getNotImportant();
    dispatch({
      type: '@filters/notImportant',
      payload: notImpNotes
    });
  }
}

// const setImportance = value => {
//   return {
//     type: '@filters/set_importance',
//     payload: {
//       value
//     }
//   }
// }

export { setImpAll, setImpImp, setImpNotImp }
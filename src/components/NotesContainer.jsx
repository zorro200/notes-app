import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import NewNote from "./NewNote";
import VisibilityFilter from "./VisibilityFilter";
import Notes from "./Notes";

/**
 * It's the container with all the logic
 * 
 * @export
 * @return {*} All the notes that we already have
 */
export default function NotesContainer() {
  // Select all the notes from the store's state
  const notes = useSelector(state => state.notes);

  // Subcribe to some specific things from the state
  // const importantNotes = useSelector(state => state.filter(note => note.important))

  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <>
      <NewNote />
      <VisibilityFilter />
      <Notes notes={notes} toggleImportant={toggleImportant} />
    </>
  )
}


import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

export default function NewNote() {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault();

    const { target } = e
    const content = target.note.value;

    dispatch(createNote(content))

    target.note.value = '';
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button>add</button>
    </form>
  )
}

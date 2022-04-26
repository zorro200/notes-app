import { useDispatch, useSelector } from "react-redux"
import { createNote } from "../reducers/noteReducer"

export default function NewNote() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.logged)

  const addNote = (e) => {
    e.preventDefault()

    const { target } = e
    const content = target.note.value

    if (user !== null) {
      dispatch(createNote(content, user.token))
    }

    target.note.value = ''
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button>add</button>
    </form>
  )
}

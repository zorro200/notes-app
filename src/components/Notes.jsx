import { Note } from "./Note";

export default function Notes({ notes, toggleImportant }) {
  return (
    <ul>
      {
        notes.map(
          note => <Note key={note.id} note={note} toggleImportant={toggleImportant} />
        )
      }
    </ul>
  )
}
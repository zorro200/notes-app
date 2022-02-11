import { Link } from "react-router-dom"

/**
 * Note's structure that will be showed on the HTML
 *
 * @param {*} { note, toggleImportant }
 * @return {*} Note's structure with its info
 */
export const Note = ({ note, toggleImportant }) => {
  return (
    <li key={note.id} onClick={() => toggleImportant(note.id)}>
      <Link to={`/notes/${note.id}`}> {note.content} </Link>
      <strong>{note.important ? 'Important' : ''}</strong>
    </li>
  )
}
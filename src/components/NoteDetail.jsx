import { useParams } from "react-router-dom";

export const NoteDetail = ({ notes }) => {

  // Get the "id" param from the URL
  const { id } = useParams()
  // TODO: Hash the notes' id to be strings instead of numbers
  const note = notes.find(note => note.id == id)
  console.log(typeof id)

  console.log(note)
  if (!note) return null

  return (
    <div>
      <span>{note.content}</span>
      <strong> {note.important ? 'Important' : ''} </strong>
    </div>
  )
}
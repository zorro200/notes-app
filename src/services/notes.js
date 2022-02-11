import axios from 'axios';

/**
 * URL where is our notes' information in the json server database file
 * @type {*} 
 */
const baseUrl = 'http://localhost:3001/notes'

/**
 * Get all notes from json server database file
 * @return {*} notes
 */
const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const getImportant = async () => {
  const res = await axios.get(baseUrl)
  const impNotes = [];
  res.data.map(note => {
    if (note.important === true) {
      impNotes.push(note);
    }
    return note
  });
  return impNotes;
}

const getNotImportant = async () => {
  const res = await axios.get(baseUrl)
  const notImpNotes = [];
  res.data.map(note => {
    if (note.important === false) {
      notImpNotes.push(note);
    }
    return note
  });
  return notImpNotes;
}

/**
 * Will create a new note with its structure.
 * The post to json server db URL will assign it an ID.
 * @constant note note's structure
 * @param {*} content note's content
 * @return {*} new note (data) that we receive from axios post response
 */
const createNew = async (content) => {
  const note = { content, important: false }
  const res = await axios.post(baseUrl, note);
  return res.data;
}

export { getAll, getImportant, getNotImportant, createNew }
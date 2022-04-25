import axios from 'axios';

/**
 * URL where are our notes in back-end.
 * @type {*} 
 */
const baseUrl = 'http://localhost:3001/api/notes'
// const baseUrl = 'https://glacial-journey-98158.herokuapp.com/api/notes'

/**
 * Get all notes from back-end
 * @return {*} notes
 */
const getAll = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

const getImportant = async () => {
  const { data } = await axios.get(baseUrl)
  const impNotes = [];
  data.map(note => {
    if (note.important === true) {
      impNotes.push(note);
    }
    return note
  });
  return impNotes;
}

const getNotImportant = async () => {
  const { data } = await axios.get(baseUrl)
  const notImpNotes = [];
  data.map(note => {
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
 * @constant config AxiosRequestConfig
 * @param {*} content note's content
 * @param {*} token user's token
 * @return {*} new note (data) that we receive from axios post response
 */
const createNew = async (content, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const note = { content, important: false }
  const { data } = await axios.post(baseUrl, note, config);
  return data;
}

export { getAll, getImportant, getNotImportant, createNew }
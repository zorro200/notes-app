import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import NotesContainer from './components/NotesContainer.jsx';
import { initNotes } from './reducers/noteReducer.js';
import { loggedUser } from './reducers/userReducer.js';
import './App.css';
import { NoteDetail } from './components/NoteDetail.jsx';
import Login from './components/Login.jsx'

const App = () => {
  // Will allow us to use imported actions (DISPATCH FUNCTIONS)
  const dispatch = useDispatch()

  const notes = useSelector(state => state.notes)
  const user = useSelector((state) => state.users.logged)

  // Each time the component has been mounted, and dispatch has been updated,
  // will show all the notes that we have on server side and will search for
  // the logged user
  useEffect(() => {
    dispatch(initNotes())
  }, [dispatch])

  useEffect(() => {
    dispatch(loggedUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='App-link'> Home </Link>
        {
          user
            ? <>
              <Link to='/notes' className='App-link'> Notes </Link>
              <Link to='/filters' className='App-link'> Filters </Link>
              <em>Logged as {user.nick}</em>
            </>
            : <Link to='/login' className='App-link'> Login </Link>
        }
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notes/:id' element={<NoteDetail notes={notes} />} />
        <Route path='/notes' element={<NotesContainer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
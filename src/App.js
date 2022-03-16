import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import NotesContainer from './components/NotesContainer.jsx';
import { initNotes } from './reducers/noteReducer.js';
import './App.css';
import { NoteDetail } from './components/NoteDetail.jsx';

const App = () => {
  // Will allow us to use imported actions (DISPATCH FUNCTIONS)
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  // Each time the component have been mounted, and dispatch has been updated,
  // will show all the notes that we have on server side
  useEffect(() => {
    dispatch(initNotes())
  }, [dispatch])

  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='App-link'> Home </Link>
        <Link to='/notes' className='App-link'> Notes </Link>
        <Link to='/filters' className='App-link'> Filters </Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes/:id' element={<NoteDetail notes={notes} />} />
        <Route path='/notes' element={<NotesContainer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
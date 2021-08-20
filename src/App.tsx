import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer'
import { addNote } from './actions'

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;

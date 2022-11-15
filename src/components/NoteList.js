import React, {useState} from 'react'
import NoteForm from './NoteForm'
import Note from './Note';
import './NoteList.css'
import {Modal, Button} from 'react-bootstrap'



function NoteList() {
    const [notes, setNotes] = useState([])
   
    const [deleteId, setDeleteId] = useState('')
    const [show, setShow] = useState(false)

    
    const handleClose = () => setShow(false)
    


    const addNote = note => {
        if(!note.text || /^\s*$/.test(note.text)) {
            return
        }

        const newNotes = [note, ...notes]

        setNotes(newNotes)
        
    };


    const removeNote = id => {
        setDeleteId(id)
        setShow(true)
    }

    const handleDeleteItem = () => {
        setNotes(notes => {
            const newArray = [...notes]
            return newArray.filter(note => note.id !== deleteId)
        })
        setShow(false)
    };

    

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteItem }>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      
      <NoteForm onSubmit={addNote} />
      <div className='col'>
        <Note className='note' 
          notes={notes} 
          removeNote={removeNote} />
      </div>
    </div>
  )
}

export default NoteList

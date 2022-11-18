import React, { useState } from 'react'
import './Note.css'
import {RiCloseCircleLine} from 'react-icons/ri'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'react-bootstrap'


function Note({notes, removeNote}) {
    
const [modal, setModal] = useState(false)
const [selectedNote, setSelectedNote] = useState(null)

const expandModal = (note) => {
  setSelectedNote(note);
  setModal(true);
}

  return notes.map((note, index) => (

    
    <div className='note-row' key={index}>
        
        <div className='note' key={note.id} onClick={() => expandModal(note)}>
            <span className='note-title'>{note.title}</span>
            <br/>
            {note.text}
            <br/>
            {note.time}
        </div>
        <div className='icons'>
            <RiCloseCircleLine 
            onClick={() => removeNote(note.id) }
            className='delete-icon'
            />
        </div>
              <Modal 
                show={modal} onHide={() => setModal(false)}>
                <ModalHeader className="bg-dark text-primary" closeButton>
                   {selectedNote && selectedNote.title}
                </ModalHeader>
                <ModalBody>
                  <p>{selectedNote && selectedNote.text}</p>
                </ModalBody>
                <ModalFooter>
                  {selectedNote && selectedNote.time}
                </ModalFooter>
              </Modal>
      
    </div>
  ))
}

export default Note

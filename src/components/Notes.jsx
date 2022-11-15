import React, {useState} from 'react'
import './Notes.css'

export default function Notes() {
    const [form, setForm] = useState([]);
      
    const SubmitButton = (e) => {
        e.preventDefault()
      
        const exampleNote = 'Example note'
        setForm([...form, exampleNote])
    }
    

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <div className='container mt-3 mb-3'>
        <div className='box'>
            <div className='mb-3'>
                <textarea type='note' name='note' className='form-control'  id='exampleFormControlInput1' rows='6' placeholder='Your note...' />
            </div>
            <div className='d-grid gap-2'>
                <button type='submit' onClick={SubmitButton} className='btn btn-outline-dark'><strong>Add</strong></button>
            </div>
        </div>
        <div className='AddNote'>
                    {form.map((note) => (<div className='col'>{note} <p>({date})</p> </div>))}
                </div>
    </div>
  )
}

import React, {useState, useEffect, useRef} from 'react'
import './NoteForm.css'


function NoteForm(props) {
const [input, setInput] = useState('')

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value)
};



const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthIndex = (new Date().getMonth());
const monthName = monthNames[monthIndex];

const current = new Date();
const date = `${current.getDate()}`;

const hour = current.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: 'example note',
        time: `${ monthName } ${ date } ${hour}`
    });

    setInput('');
};

  return (
    
                <form className='note-form' onSubmit={handleSubmit}>
                    <input type='text' 
                        placeholder='Your note...'
                        value={input} 
                        name="text" 
                        className='note-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                
                <br/>
                <button className='btn btn-outline-dark'><strong>Add</strong></button>
                </form>
      
  )
}

export default NoteForm

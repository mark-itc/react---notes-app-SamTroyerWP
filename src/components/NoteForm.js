import React, {useState, useEffect, useRef} from 'react'
import './NoteForm.css'


function NoteForm(props) {
const [inputText, setInputText] = useState('');
const [inputTitle, setInputTitle] = useState('');



const handleChangeTitle = e => {
    setInputTitle(e.target.value)
};

const handleChangeText = e => {
    setInputText(e.target.value)
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
        text: inputText,
        time: `${ monthName } ${ date } ${hour}`,
        title: inputTitle
    });

    setInputText('');
    setInputTitle('');
};

  return (
    
                <form className='note-form' onSubmit={handleSubmit}>
                    <input type='text'
                        placeholder='Title (optional)'
                        value={inputTitle}
                        name='title'
                        className='title-input'
                        onChange={handleChangeTitle}
                    />
                    <br/>
                    <br/>
                    <textarea type='text'
                        rows='5'
                        placeholder='Your note...'
                        value={inputText} 
                        name="text" 
                        className='note-input'
                        onChange={handleChangeText}
                    />
                
                <br/>
                <button className='btn btn-outline-dark'><strong>Add</strong></button>
                </form>
      
  )
}

export default NoteForm

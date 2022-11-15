import './App.css';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 
  
  return (
    <div className="App">
      
      <div className='container mt-3 mb-3'>
      <NoteList/>
      </div>
    </div>
  );
}

export default App;

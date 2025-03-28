import { useState, useEffect, use } from 'react'
import Complaint from './components/Complaint'
import useRegister from './hooks/useRegister'
import './App.css'

function App() {

  
  const { loading, register } = useRegister()
  
  
  const allFetch = async () => {
    try {
      const response = await fetch('/api/complaint/');
      if (!response.ok) {
        throw new Error('server error');
      }
      const data = await response.json();
      console.log(data);
      setComplaint(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(input);
    console.log(input);
    setInput({
      name: "",
      description: "",
      roll: "",
      course: ""
    });
  }
  
  useEffect(() => {
    allFetch();
  }, [])
  
  const [complaint, setComplaint] = useState([])
  const [input, setInput] = useState({
    name: "",
    description: "",
    roll: "",
    course: ""
  })
  
  return (
    <>
      <div className='main_container'>
        <h1>TEST</h1>
        <h3>Register Complaints</h3>
        <div className='inputs'>
          <div>
            <label>Name</label> <input value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })} type="text" />
          </div>
          <div>
            <label>Complaint</label> <input value={input.description}
              onChange={(e) => setInput({ ...input, description: e.target.value })} type="text" />
          </div>
          <div>
            <label>Course</label> <input value={input.course}
              onChange={(e) => setInput({ ...input, course: e.target.value })} type="text" />
          </div>
          <div>
            <label>Roll number</label> <input value={input.roll}
              onChange={(e) => setInput({ ...input, roll: e.target.value })} type="text" />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <h3>Complaints</h3>
        <div className='container'>
          <div className='complaint'>
            <div className='box'>
              {complaint.map((complaint) => <Complaint
                key={complaint.id}
                id={complaint.id}
                name={complaint.name}
                description={complaint.description}
                course={complaint.course}
                roll={complaint.roll}
                status={complaint.status} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

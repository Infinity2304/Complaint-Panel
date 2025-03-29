import { useState, useEffect, use } from 'react'
import { useNavigate } from 'react-router-dom';
import useRegister from '../hooks/useRegister'
import '../App.css'

function Home() {


  const { loading, register } = useRegister()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit the complaint
      await register(input);
      console.log(input);

      // Clear the input fields
      setInput({
        name: "",
        description: "",
        roll: "",
        course: ""
      });
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  const navigate = useNavigate();
  const handleViewComplaint = ()=>{
    navigate('/complaint');
  }


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
          <div className='home-buttons'>
            <button onClick={handleViewComplaint}>View Complaints</button>
            <button onClick={handleSubmit} disabled={!input.name || !input.course || !input.description || !input.roll}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

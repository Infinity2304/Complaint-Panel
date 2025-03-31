import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Auth = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit= async() =>{
        try {
            await login({ username, password });
      
            const cookies = document.cookie;
            console.log(cookies);
            
            if (cookies.includes("admin_data")) {
              navigate('/admin');
            } else {
              alert("Authentication failed.");
            }
          } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
          }
    }

    const {login} = useAdmin();

  return (
    <div className='auth_input'>
      <h1>Authentication</h1>
      <label htmlFor="">USERNAME</label>
      <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
      <label htmlFor="">PASSWORD</label>
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Auth

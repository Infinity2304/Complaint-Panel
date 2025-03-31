import { useNavigate } from 'react-router-dom';
import '../App.css'

function Main() {

    const navigate = useNavigate();

    const handleStudent = ()=>{
        navigate('/home');
    }

    const handleProfessor =()=>{
        navigate('/auth');
    }
    return (
        <>
            <div>
                <h1>Main page</h1>
                <h3>Are you a student or professor ?</h3>
                <button onClick={handleStudent}>Student</button>
                <button onClick={handleProfessor}>Professor</button>
            </div>
        </>
    )
}

export default Main

import React,{useContext} from 'react'
import { LoginContext } from '../../LoginContext/LoginContext'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
    const navigate = useNavigate();

    const { username, password,setUserName, setPassword, setUserProfile, userProfile} = useContext(LoginContext);
    

    const handleSubmission = (event)=>{
        if(username && password){
            alert("data submitted successfully");
            setUserProfile(true);
            navigate('/');
        }else{
            event.preventDefault();
            alert("No no no no");
        }
    }
  return (
    <>
    <div className="login-container">
        <div className="single-element">
            <label htmlFor="name">Name</label>
            <input type="text" value={username} required onChange={(event)=>setUserName(event.target.value)} />
        </div>
        <div className="single-element">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} required onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <button onClick={handleSubmission} >Submit</button>

    </div>
    
    </>
)
}

export default LoginPage
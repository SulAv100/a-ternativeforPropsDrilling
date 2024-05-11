
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'
import React,{useState, useContext} from 'react'
import { LoginContext } from './LoginContext/LoginContext'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  

  const [username,setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userProfile, setUserProfile] = useState(false);

  return (
    <>
    <Router>
    <LoginContext.Provider value={{username, setUserName, password, setPassword, setUserProfile,userProfile}}>
      <Navbar/>
    {/* {
      userProfile? <ProfilePage/> : <LoginPage/>
    } */}
    </LoginContext.Provider>
    </Router>
    </>
  )
}

export default App

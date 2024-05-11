import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './Navbar.css'
import ProfilePage from '../ProfilePage/ProfilePage'
import LoginPage from '../LoginPage/LoginPage'
import ImageUploader from '../ImageUploader/ImageUploader'

function Navbar() {
  return (
    <>
        <nav>
            <div className="navbar-element">
                <div className="left-component">
                    <span className='span'>Home</span>
                    <span className='span'>Logo Placer</span>
                </div>
                <div className="left-component">
                    <span className='span'>About</span>
                    <Link to='/imageuploader' className='span'>ImageUploader</Link>
                </div>
                <div className="left-component">
                    <Link to='/' className='span'>Username</Link>
                    <Link to='/login' className='span'>Login</Link>  
                </div>
            </div>
            <Routes>
                <Route path='/imageuploader' element={<ImageUploader/>}/>
                <Route path='/' element={<ProfilePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </nav>
    </>
)
}

export default Navbar
import React,{useContext} from 'react'
import './ProfilePage.css'
import { LoginContext } from '../../LoginContext/LoginContext'

function ProfilePage() {
    const {username,password, userProfile} = useContext(LoginContext);

  return (
    <>
        <div className="main-container">
            <div className="data">
            <span>
            Status : {userProfile? "Online" : "Offline"}
                </span>
           <span>
           Username : {username}
            </span>
            <span>
            Password : {password}

            </span>
            </div>
            
        </div>
    </>
)
}

export default ProfilePage
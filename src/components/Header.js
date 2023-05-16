import React from 'react'
import {useNavigate} from 'react-router-dom'
// import {getUserName} from './functions/getUserName'
import discussion from './images/discussion.png'
import '../Styles/Header.css'

export default function Header() {
    const navigate = useNavigate();
    const getUserDetails = JSON.parse(localStorage.getItem("signedUserDetails"));
    // const loggedInUser = getUserName();
    function handleLogOut() {
        navigate("/");
        localStorage.removeItem("signedUserDetails");
      }
      function moveToDiscussionForum(){
        navigate("/discussionSpace")
      }
  return (
    <div>
         <div className="header-container">
        <header>
          <button
            type="button"
            onClick={handleLogOut}
            className="logout-button"
          >
            LOGOUT
          </button>
          <small>{getUserDetails?.name}</small>
          <button className='discussion-button' onClick={moveToDiscussionForum}>
            <img src={discussion} alt='react icon' className='discussion-icon'/>
          </button>
        </header>
      </div>
    </div>
  )
}


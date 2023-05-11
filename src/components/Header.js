import React from 'react'
import {useNavigate} from 'react-router-dom'
import {getUserName} from './functions/getUserName'
import '../Styles/Header.css'

export default function Header() {
    const navigate = useNavigate();
    const loggedInUser = getUserName();
    function handleLogOut() {
        navigate("/");
        localStorage.removeItem("signedUserDetails");
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
          <small>{loggedInUser}</small>
        </header>
      </div>
    </div>
  )
}


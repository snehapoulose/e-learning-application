import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import "../Styles/Login.css";
import admin from "../admin.json";
import registeredUser from "../registeredUser.json"
import privilegedUser from "../privilegedUser.json"
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setFormError(validate(formData));
  }
  const validate = () => {
    const errors = {};
    const username = formData.email;
    const password = formData.password;
    const selectedRole = formData.role;
    if (selectedRole === "admin") {
      admin.forEach((admins) => {
        if (admins.email !== username || admins.password !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else if (admins.email !== username && admins.password !== password) {
          errors.password = "Invalid credentials or invalid role";
        } else {
          localStorage.setItem("signedUserDetails", JSON.stringify(admins));
          navigate("/admin");
        }
      });
      return errors;
    } else if (selectedRole === "registered user") {
      // hotelAdmin.forEach((user) => {
      //   var paswd = user.username;
      //   var num = 123;
      //   paswd += num;
      //   if (user.email !== username || paswd !== password) {
      //     errors.username = "Invalid credentials or invalid role";
      //   } else if (user.email !== username && paswd !== password) {
      //     errors.username = "Invalid credentials or invalid role";
      //   } else {
      //     localStorage.setItem("hotelAdminDetails", JSON.stringify(user));
      //     navigate("/hotelAdminPage");
      //   }
      // });
      registeredUser.forEach((users)=>{
        if (users.email !== username || users.password !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else if (users.email !== username && users.password !== password) {
          errors.password = "Invalid credentials or invalid role";
        } else {
          localStorage.setItem("signedUserDetails", JSON.stringify(users));
          navigate("/registeredUser");
        }
      })
      return errors;
    } else if (selectedRole === "privileged user") {
      privilegedUser.forEach((user) => {
        if (user.email !== username || user.password !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else if (user.email !== username && user.password !== password) {
          errors.password = "Invalid credentials or invalid role";
        } else {
          localStorage.setItem("signedUserDetails", JSON.stringify(user));
          navigate("/privilegedUser");
        }
      });
      return errors;
    } else {
      return errors;
    }
  };
  return (
    <div>
        <Navbar/>
        <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div class="form-header">
            <h3>Login Form</h3>
          </div>
          <label>
            Select a role
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-input"
            >
              <option value="select role">Select a role</option>
              <option value="admin">Admin</option>
              <option value="registered user">Registered User</option>
              <option value="privileged user">Privileged User</option>
            </select>
          </label>
          <p>{formError.username}</p>
          <label>
            Username:
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </label>
          <p>{formError.password}</p>
          <label>
            Password:
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </label>
          <div className="form-group">
            <button type="submit" className="form-button">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

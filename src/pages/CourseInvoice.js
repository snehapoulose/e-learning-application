import React from 'react'
import Header from '../components/Header'
import '../Styles/CourseInvoice.css';
// import { getUserName } from '../components/functions/getUserName';

export default function CourseInvoice() {
    const courseReceipt = JSON.parse(localStorage.getItem("courseDetails"));
    const getUserDetails = JSON.parse(localStorage.getItem("signedUserDetails"));
    // const loggedInUser = getUserName();
  return (
    <div>
        <Header/>
        <div className="course-invoice">
            <p>Hi, {getUserDetails.name} , have selected the following course</p>
        <p>Course Name :{courseReceipt.title}</p>
        <p>Paid : $ {courseReceipt.id*100}</p>
      </div>
    </div>
  )
}

import React from 'react'
import Header from '../components/Header'
import '../Styles/PrivilegedUser.css'

export default function CourseChapter() {
    const courseChapter = JSON.parse(localStorage.getItem("courseChapters"));
  return (
    <div>
        <Header/>
        <p className='course-chapters'>Course Name : {courseChapter.title},</p>
        <p className='course-chapters'>List of Chapters:</p>
        <p>{courseChapter.body}</p>
    </div>
  )
}

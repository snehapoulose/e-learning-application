import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import ReactPaginate from 'react-paginate';
// import {Modal,Button} from 'react-bootstrap';
import '../Styles/PrivilegedUser.css'
import { Link } from 'react-router-dom';

export default function PrivilegedUser() {
  const [courses, setCourses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  // const [isShow, invokeModal] = useState(false)
  // const initModal = () => {
  //   return invokeModal(!false)
  // }
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage; 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses)
  const courseData = courses
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((course) => {
    return (
      <div>
        <div className="home-contents">
          <h2>{course.title}</h2>
        </div>
        <div className='home-contents'>
          <Link to={`/courseChapter/${course.id}`}>
          <button type='submit' onClick={()=>{
            localStorage.setItem("courseChapters",JSON.stringify(course))
            console.log(course.body)
          }}>View Chapters</button>
          </Link>
        
        </div>
        {/* {isShow ?(
        <div className='card'>
          <div className='container'>
          {course.body}
          </div>
        </div>
       )
      :null} */}
      
        {/* <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        </Modal> */}
      </div>
    );
  });
  const pageCount = Math.ceil(courses.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <Header/>
      <div className="home-container">{courseData}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

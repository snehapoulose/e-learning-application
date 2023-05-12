import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import ReactPaginate from "react-paginate";
import "../Styles/RegisteredUser.css"
import { Link } from 'react-router-dom';

export default function RegisteredUser() {
  const [courses, setCourses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage; 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const courseData = courses
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((course) => {
    return (
      <div>
        <div className="home-contents">
          <h2>{course.title}</h2>
        </div>
        <div className='home-contents'>
        <h2> ${course.id*100}</h2>
        </div>
        <div className="home-contents">
            <Link to={`/courseInvoice/${course.id}`}>
              <button type="submit"
                onClick={() => {
                  localStorage.setItem("courseDetails", JSON.stringify(course));
                  console.log(course.title);
                }}
                className="hotel-invoice-button"
              >
                Buy Now
              </button>
              
            </Link>
          </div>
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
      <h1 className="register-header">LIST OF COURSES :</h1>
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

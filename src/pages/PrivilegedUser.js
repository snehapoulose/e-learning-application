import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import ReactPaginate from 'react-paginate';

export default function PrivilegedUser() {
  const [courses, setCourses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
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

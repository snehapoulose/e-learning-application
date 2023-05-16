import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../Styles/Admin.css";
import ReactPaginate from "react-paginate";

export default function Admin() {
  const [adminCourse, setAdminCourse] = useState({ title: "" });
  const [courses, setCourses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  const deleteByValue = (value) => {
    setCourses((hotelValues) => {
      return hotelValues.filter((course) => course !== value);
    });
  };
  const courseData = courses
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((course) => {
    return (
      <div>
        <li key = {course.id}>
        <div className="home-contents">
          <h2>{course.title}</h2>
        </div>
        <div className="home-contents">
          <button
            onClick={() => deleteByValue(course)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
        </li>
      </div>
    );
  });
  const pageCount = Math.ceil(courses.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleChange = (event) => {
    setAdminCourse((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCourses((prevState) => [
      {
        title: adminCourse.title,
      },
      ...prevState,
    ]);
    setAdminCourse({
      title: "",
    });
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Course Name"
          name="title"
          value={adminCourse.title}
          onChange={handleChange}
          className="add-course"
          required
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
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
  );
}

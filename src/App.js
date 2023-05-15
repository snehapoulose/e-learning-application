import './App.css';
import {Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';
import RegisteredUser from './pages/RegisteredUser';
import PrivilegedUser from './pages/PrivilegedUser';
import Footer from './components/Footer';
import CourseInvoice from './pages/CourseInvoice';
import CourseChapter from './pages/CourseChapter';
import DiscussionSpace from './components/DiscussionSpace'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<LoginPage/>}/>
        <Route path = "/admin" element={<Admin/>}/>
        <Route path='/registeredUser' element={<RegisteredUser/>}/>
        <Route path="/courseInvoice/:id" element={<CourseInvoice />}/>
        <Route path='/privilegedUser' element={<PrivilegedUser/>}/>
        <Route path='/courseChapter/:id' element={<CourseChapter/>}/>
        <Route path='/discussionSpace' element={<DiscussionSpace/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import {Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';
import RegisteredUser from './pages/RegisteredUser';
import PrivilegedUser from './pages/PrivilegedUser';
import Footer from './components/Footer';
import CourseInvoice from './pages/CourseInvoice';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<LoginPage/>}/>
        <Route path = "/admin" element={<Admin/>}/>
        <Route path='/registeredUser' element={<RegisteredUser/>}/>
        <Route path="/courseInvoice/:id" element={<CourseInvoice />}/>
        <Route path='/privilegedUser' element={<PrivilegedUser/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

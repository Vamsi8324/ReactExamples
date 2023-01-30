import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet,Routes,Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/pages/Home';
import ContactUs from './component/pages/ContactUs';
import Services from './component/pages/Services';
import AboutUs from './component/pages/AboutUs';
import Admin from './component/pages/Admin';
import User from './component/pages/User';
import Login from './component/pages/Login';
import Notfound from './component/pages/Notfound';
function App() {
  return (
    <><BrowserRouter>
    <div className='navbar-div'>
    <Link to={'/'}>Home</Link>
    <Link to={'/contact'}>Contact Us</Link>
    <Link to={'/login'}>Login</Link>
    <Link to={'/about'}>About Us</Link>
    
    </div>
    
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/about" element={<AboutUs/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/user" element={<User/>}></Route>
    <Route path='*' element={<Notfound />}/>
    </Routes>
      
      
    </BrowserRouter>
    <Outlet/>
    </>
    
  );
}

export default App;

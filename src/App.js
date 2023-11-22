import './App.css';
import Signup from './pages/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AddPost from './pages/addPost';
import Login from './pages/login';
import Guide from './pages/guides';



const  App = () => {

  return (
  <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/addPost' element={<AddPost/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/Guide' element={<Guide/>}/>

  </Routes>
  
  </BrowserRouter>

  </>
  );
}

export default App;

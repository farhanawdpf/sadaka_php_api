
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Adduser from './pages/users/Adduser';
import Manageuser from './pages/users/Manageuser';
import Edituser from './pages/users/Edituser';
import AddCategory from './pages/category/AddCategory';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePortal from './portal/Pages/Home';
import { AddProduct } from './pages/product/AddProduct';
import { ListProduct } from './pages/product/ListProduct';
import { EditProduct } from './pages/product/EditProduct';



const App = () => {
  return (
     <BrowserRouter>     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/add-user" element={<Adduser/>}/>
        <Route path="/add-category" element={<AddCategory/>}/>
        <Route path="/manage-user" element={<Manageuser/>}/>
        <Route path="/edit-user" element={<Edituser/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/items" element={<AddProduct />} />
        <Route path="/itemslist" element={<ListProduct />} />
        <Route path="/itemedit/:id" element={<EditProduct />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<HomePortal/>} />
      </Routes>
    </BrowserRouter>

  
  );
};

export default App;
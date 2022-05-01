import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import ManageItems from './Pages/ManageItems/ManageItems';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import AddItems from './Pages/AddItem/AddItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='updateproduct/:productId' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path ="/additem" element={<AddItems></AddItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

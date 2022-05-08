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
import MyItems from './Pages/MyItems/MyItems';
import Signup from './Pages/Signup/Signup';
import Requireauth from './Pages/RequirAuth/Requireauth';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import { Parallax } from 'react-parallax';
import Blog from './Pages/Blog/Blog';
import CustomerCare from './Pages/CustomerCare/CustomerCare';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='updateproduct/:productId' element={<Requireauth>
          <UpdateProduct></UpdateProduct>
        </Requireauth>}></Route>
        <Route path='/manageitems' element={
          <Requireauth>
            <ManageItems></ManageItems>
          </Requireauth>
        }></Route>
        <Route path="/additem" element={
          <Requireauth>
            <AddItems></AddItems>
          </Requireauth>
        }></Route>
        <Route path='/myitems' element={
          <Requireauth>
            <MyItems></MyItems>
          </Requireauth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/customercare' element={<CustomerCare></CustomerCare>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

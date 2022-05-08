import "./Header.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomeLink/CustomLink';
import logo from "../Images/logo.png"

const Header = () => {
    const [user] = useAuthState(auth);
    const profile = (user?.email)?.slice(0,1).toUpperCase()

    
  

    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <nav className="navbar-expand-lg navbar navbar-dark bg-primary sticky-lg-top sticky-sm-top">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="#" >
                        <img src={logo} width="30" height="30" style={{width:"25%", marginRight:"10px"}} className="d-inline-block align-top " alt="" />
                         <span>Walton</span> House</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-start" id="navbarNav" >
                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item">
                                <CustomLink className="nav-link active" aria-current="page" to="/" >Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                {user && <CustomLink className="nav-link active" to={'/manageitems'}>Manage Items</CustomLink>}
                            </li>
                            <li className="nav-item">
                                {user && <CustomLink className="nav-link active" to={'/additem'}>Add Item</CustomLink>}
                            </li>
                            <li className="nav-item">
                                {user && <CustomLink className="nav-link active" to={"/myitems"}>My Items</CustomLink>}
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link active" to={"/blog"}>Blog</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link active" to={"/customercare"}>Customar Care</CustomLink>
                            </li>
                            <li className="nav-item">
                                {user ? <CustomLink className="nav-link active" onClick={logout} to={"/login"}>Sign Out</CustomLink> : <CustomLink className="nav-link active" to={"/login"}>Login</CustomLink>}
                            </li>
                            <li className="nav-item">
                                {user ? <CustomLink className="nav-link active d-none" to={"/signup"}>Sign Up</CustomLink> : <CustomLink className="nav-link d-block active" to={"/signup"}>Sign Up</CustomLink>}
                            </li>
                            {user && <li className="nav-item" title={user?.email}>
                                <div className='profile'>
                                    <h3 className='profileName'>{profile}</h3>
                                </div>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
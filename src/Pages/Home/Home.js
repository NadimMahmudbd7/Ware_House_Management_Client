import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { toast } from 'react-toastify';
import ScrollToTop from "react-scroll-to-top";
import banner1 from "../Images/banner1.jpg";
import banner2 from "../Images/banner2.jpg";
import banner3 from "../Images/banner3.jpg";
import banner4 from "../Images/banner4.jpg";
import logo1 from "../Images/logo-1.png";
import logo2 from "../Images/logo-2.png";
import logo3 from "../Images/logo-3.png";
import logo4 from "../Images/logo-4.png";
import logo5 from "../Images/logo-5.png";
import Product from '../Product/Product';
import Helmeted from '../Helmet/Helmet';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "https://shrouded-eyrie-37624.herokuapp.com/products"
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    
    useEffect(()=>{
        window.history.scrollRestoration = 'manual'
    },[])

    const Subscribe = () => {
        toast.success("Thanks For Subscriber")
    }

    return (
        <>

            <Helmeted title={''}></Helmeted>
            <ScrollToTop smooth />
            {/* ------------------------------------------------Carosel Section start------------------------------- */}

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* ------------------------------------------------Carosel Section End------------------------------- */}


            <section>
                <div>
                    <h1 className='text-center product my-4'>Inventory <span className='fw-bold'>Products : {products?.length}</span></h1>
                    <div className=" mx-auto row row-cols-1 row-cols-md-3 g-4 w-100">
                        {
                            products?.map(product => <Product product={product} key={product._id} ></Product>)
                        }
                    </div>
                    <div className='allItems'>
                        <Link to={"/manageitems"}>
                        <button className='.login-container button, updatebtn'>Manage All Products</button>
                        </Link>
                    </div>
                </div>

            </section>


            {/* paralax for newsletter */}

            <Parallax className='paralex newsleterImage' strength={200} bgImage={banner3} style={{ height: "500px" }}>
                <div className='paralaxtext' >
                    <h3 className='subscriberText'>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <small className='subscriberDes'>We will send you one email each month, we don't send promotions, we don't like spam. You can unsubscribe immediately by clicking the unsubscribe link at the bottom of the emails.</small>
                    <div className="input">
                        <div className="name">
                            <h4>Name</h4>
                            <input className='inputField' type="text" name="name" id="" />
                        </div>
                        <div className="email">
                            <h4>Email</h4>
                            <input className='inputField' type="text" name="email" id="" />
                        </div>
                    </div>
                    <button onClick={Subscribe} className='updatebtn'>Subscribe Now</button>
                </div>
            </Parallax>

            {/* brand */}
            <div className='brand' data-aos="fade-up">
                <div className="image1">
                    <img className='brandimg' src={logo1} alt="" />
                </div>
                <div className="image2">
                    <img className='brandimg' src={logo2} alt="" />
                </div>
                <div className="image3">
                    <img className='brandimg' src={logo3} alt="" />
                </div>
                <div className="image4">
                    <img className='brandimg' src={logo4} alt="" />
                </div>
                <div className="image5">
                    <img className='brandimg' src={logo5} alt="" />
                </div>
            </div>

            <Parallax className='paralex paralexImage ' strength={200} bgImage={banner4} style={{ height: "500px" }}>


                <div className="progressBar container">
                    <div className="progressLeftSide" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div>
                            <h1 className='watchText'>WATCH OUR COMPANY PRESENTATION</h1>
                            <small className='text-white'>Watch Video</small>
                            <a target={"_blank"} href='https://www.youtube.com/watch?v=LeLZFuO6O6U'>
                                <div className="playbtn">
                                    <ion-icon lassName="playbtnForMobile" style={{ color: "white", margin: "0px" }} name="play-outline"></ion-icon>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="progressRightSide" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="cusSaticfaction">
                            <h5 className='CusText'>SATICFACTION</h5>
                            <div className="progress1">
                                <div className="CusProgress"></div>

                            </div>
                        </div>
                        <div className="roffing">
                            <h5 className='CusText'>ROOFING</h5>
                            <div className="progress1">
                                <div className="roffProgress"></div>

                            </div>
                        </div>
                        <div className="Secure">
                            <h5 className='CusText'>SECURE</h5>
                            <div className="progress1">
                                <div className="secureProgress"></div>

                            </div>
                        </div>
                    </div>
                </div>



            </Parallax>


        </>
    );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
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

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "http://localhost:4000/products"
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return (
        <>
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
                <h1 className='text-center product my-4'>Inventory <span className='fw-bold'>Products:{products?.length}</span></h1>
                <hr />
                <hr className='hr1'/>
                <div className="row row-cols-1 row-cols-md-3 g-4 w-100">
                    {
                        products?.map(product => <Product product={product} key={product._id} ></Product>)
                    }
                </div>

            </section>


            {/* paralax for newsletter */}

            <Parallax className='paralex' strength={200} bgImage={banner3} style={{ height: "500px" }}>
                <div className='paralaxtext'>
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <small>We will send you one email each month, we don't send promotions, we don't like spam. You can unsubscribe immediately by clicking the unsubscribe link at the bottom of the emails.</small>
                    <div className="input">
                        <div className="name">
                            <h4>Name</h4>
                            <input className='inputField' type="text" name="" id="" />
                        </div>
                        <div className="email">
                            <h4>Email</h4>
                            <input className='inputField' type="text" name="" id="" />
                        </div>
                    </div>
                    <button className='updatebtn'>Subscribe Now</button>
                </div>
            </Parallax>

            {/* brand */}
            <div className='brand'>
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

            <Parallax className='paralex' strength={200} bgImage={banner4} style={{ height: "500px" }}>


                <div className="progressBar container">
                    <div className="progressLeftSide">
                        <h1 className='watchText'>WATCH OUR COMPANY PRESENTATION</h1>
                        <small className='text-white'>Watch Video</small>
                        <a target={"_blank"} href='https://preview.themeforest.net/item/lightwire-construction-industry-modx-theme/full_screen_preview/34548859?_ga=2.219112156.476454025.1651663520-1945677544.1651504589'>
                            <div className="playbtn">
                                <ion-icon style={{color:"white" ,margin:"0px"}} name="play-outline"></ion-icon>
                            </div>
                        </a>

                    </div>
                    <div className="progressRightSide">
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
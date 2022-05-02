import React, { useState, useEffect } from 'react';
import banner1 from "../Images/banner1.jpg"
import banner2 from "../Images/banner2.jpg"
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
                <h1 className='text-center'>Inventory <span className='fw-bold'>Itmes:{products?.length}</span></h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products?.map(product => <Product product={product} key={product._id} ></Product>)
                }
                </div>

            </section>
        </>
    );
};

export default Home;
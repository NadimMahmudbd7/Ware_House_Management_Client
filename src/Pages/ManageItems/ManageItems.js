import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Helmeted from '../Helmet/Helmet';
import AllProducts from '../Shared/PerUser/AllProducts';
import "./ManageItems.css"

const ManageItems = () => {
    const [products, setProducts] = AllProducts()

    const deleteDetails = (id) => {
        console.log(id);
        const proced = window.confirm("Are You Agree For Delete ?")
        if (proced) {
            const url = `https://shrouded-eyrie-37624.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }

    }
    return (
        <div data-aos="fade-up">
            <ScrollToTop smooth />
            <Helmeted title={"Manage Items"}></Helmeted>
            <h1 className='text-center my-3'>Inventory Total Products:{products.length}</h1>
            <table className='table table-striped table-dark manageItems'>
                <thead>
                    <tr>
                        <th scope="col text-black">Product Name</th>
                        <th scope="col" >Price</th>
                        <th scope="col" >Quentity</th>
                        <th scope="col" >Supplier Name</th>
                        <th className='manageItemImage' scope="col" >Image</th>
                        <th scope="col">
                            <span>Edit</span>
                        </th>
                        <th scope="col">
                            <span>Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        products.map(product => {
                            return (
                                <tr>
                                    <th className='text' scope="row">{product.name}</th>
                                    <td >{product.price}</td>
                                    <td>{product.qty == 0 ? "Sold Out" : product.qty}</td>
                                    <td>{product.suppliername}</td>
                                    <td className='manageItemImage'><img className='w-25' src={product.img} alt="" /></td>
                                    <td >
                                    <Link to={`/updateproduct/${product._id}`}> 
                                    <ion-icon name="create-outline" style={{margin:"0px", backgroundColor:"lightskyblue"}} ></ion-icon>
                                    </Link>
                                    </td>
                                    <td >
                                        < button className='updatebtn' onClick={() => deleteDetails(product._id)} >Delete</button>
                                    </td>

                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;

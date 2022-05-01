import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PerUSer from '../Shared/PerUser/PerUser';

const UpdateProduct = () => {
    const { productId } = useParams()
    const [Oneproduct, setOneproduct] = PerUSer(productId)



    const handleDeliverQuentity = (event) => {
        event.preventDefault()
        const quentity = event.target.qty.value
        const data = {
            qty: Oneproduct?.product?.qty,
            deliverQty: quentity,
        }
        const url = `http://localhost:4000/updateproduct/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => setOneproduct(data.result))
        event.target.reset()
    }
    const handleAddProducts = (event) => {

        event.preventDefault()
        const quentity = event.target.qty.value
        const data = {
            qty: Oneproduct?.product?.qty,
            deliverQty: quentity,
        }
        const url = `http://localhost:4000/updateproduct/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => setOneproduct(data.addForProducts))
        event.target.reset()
    }

    return (
        <div>
            <h1>this is update produtct page:{Oneproduct?.product?.name}</h1>
            <div className="card h-100">
                <img src={Oneproduct?.product?.img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{Oneproduct?.product?.name}</h5>
                    <p className="card-text">{Oneproduct?.product?.description}</p>
                    <h6 className="card-text">Price: Tk.{Oneproduct?.product?.price}</h6>
                    <p className="card-text">Quentity: {Oneproduct?.product?.qty}</p>
                    <p className="card-text"><small>Supplier-Name: {Oneproduct?.product?.suppliername}</small></p>

                    <div className="card" style={{ width: "100%" }}></div>
                    <div>
                        <form action="" onSubmit={handleDeliverQuentity}>
                            <input type="text" name="qty" id="qty" placeholder='your quentity' />
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                <input type="submit" value="Product Deliver" />
                            </div>
                        </form>
                        <form action="" onSubmit={handleAddProducts}>
                            <input type="text" name="qty" id="qty" placeholder='your quentity' />
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                <input type="submit" value="Product Add" />
                            </div>
                        </form>
                        
                    </div>



                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
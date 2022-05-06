import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PerUSer from '../Shared/PerUser/PerUser';

const UpdateProduct = () => {
    const { productId } = useParams()
    const [Oneproduct, setOneproduct] = PerUSer(productId)



    const handleDeliverQuentity = (event) => {
        event.preventDefault()
        const quentity = event.target.qty.value
        if (quentity === "") {
            toast.error("Please Input Any Qty")
        }
        else {
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
                .then(data => {
                    setOneproduct(data.successfull)
                    toast.error(data.error)
                })
            event.target.reset()
        }
    }


    const handleAddProducts = (event) => {

        event.preventDefault()
        const quentity = event.target.qty.value
        if (quentity === "") {
            toast.error("Please Input Any Qty")
        }
        else {
            const data = {
                qty: Oneproduct?.product?.qty,
                deliverQty: quentity,
            }
            const url = `http://localhost:4000/updateproducts/${productId}`
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    setOneproduct(data.result)
                    toast.error(data.error)
                })
            event.target.reset()
        }

    }

    return (
        <div>
            <h1 className='text-center mb-5 mt-2'>Manage Your Stock Product : {Oneproduct?.product?.name}</h1>
            <div className="updateInventory">
                <div className="card updatecard h-100">
                    <div className='updateInventor'>
                        <img src={Oneproduct?.product?.img} alt="" className="card-img-top updateInventoryImage" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{Oneproduct?.product?.name}</h5>
                        <p className="card-text">{Oneproduct?.product?.description}</p>
                        <h6 className="card-text">Price: Tk.{Oneproduct?.product?.price}</h6>
                        <p className="card-text">Quentity: {Oneproduct?.product?.qty==0?"Sold Out":Oneproduct?.product?.qty}</p>
                        <p className="card-text"><small>Supplier-Name: {Oneproduct?.product?.suppliername}</small></p>

                    </div>
                </div>
                <div className='inventoryBtn'>
                    <form action="" onSubmit={handleDeliverQuentity}>
                        <div className="deliverBtn">
                            <input className='textInput' type="text" name="qty" id="qty" placeholder='Deliver Qty' />
                            <div>
                                <input className='btn btn-primary' type="submit" value="Product Deliver" />
                            </div>
                        </div>
                    </form>
                    <div className="addBtn">
                        <form action="" onSubmit={handleAddProducts}>
                            <div className="addBtn">
                                <input className='textInput' type="text" name="qty" id="qty" placeholder='Add Qty' />
                                <div>
                                    <input className='btn btn-primary' type="submit" value="Product Add" />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
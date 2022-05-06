import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import './AddItem.css'
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        fetch('https://shrouded-eyrie-37624.herokuapp.com/products', {
            method: "POST",
            headers: {
                "authorization":`${user?.email} ${localStorage.getItem("AccessToken")}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                
                if(result.value===true){
                    toast.success(result.success)
                }
                else{
                    toast.error(result.success)
                }
            })
    }
    return (
        <div className='addForm'>
            <h1 className='text-center my-4 text-white'>Add Your Item:</h1>
            <form className='inputForm login-container' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder='noraml input' value={user?.email} readOnly id="" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" required />
                <textarea className='my-3 rounded textArea' {...register("description")} id="" cols="10" rows="4" placeholder='Product Description' required ></textarea>
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="number" {...register("qty")} placeholder="Qty"/>
                <input {...register("suppliername", { required: true, maxLength: 20 })} placeholder="Supplier Name" required />
                <input {...register("img")} placeholder="Product Photo URL" required/>
                <input type="submit" className='addbtn' />
            </form>

        </div>
    );
};

export default AddItem;
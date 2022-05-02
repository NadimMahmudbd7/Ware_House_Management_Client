import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import './AddItem.css'
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        fetch('http://localhost:4000/products', {
            method: "POST",
            headers: {
                "authorization":`${user?.email} ${localStorage.getItem("AccessToken")}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div>
            <h1 className='text-center my-4'>Add Your Item:</h1>
            <form className='inputForm login-container' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder='noraml input' value={user?.email} readOnly id="" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Problem Name" required />
                <textarea className='my-3 rounded' {...register("description")} id="" cols="10" rows="4" placeholder='Solving Description' required ></textarea>
                <input type="number" {...register("price")} />
                <input type="number" {...register("qty")} />
                <input {...register("suppliername", { required: true, maxLength: 20 })} placeholder="Problem Name" required />
                <input {...register("img")} placeholder="Photo URL" required />
                <input type="submit" className='addbtn' />
            </form>

        </div>
    );
};

export default AddItem;
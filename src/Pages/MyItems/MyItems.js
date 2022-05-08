import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ScrollToTop from 'react-scroll-to-top';
import auth from '../../firebase.init';
import Helmeted from '../Helmet/Helmet';
import PerUserItems from '../PerUserItems/PerUserItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `https://shrouded-eyrie-37624.herokuapp.com/items?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data?.users))
    }, [items])
    return (
        <div>
            <ScrollToTop smooth />
            <Helmeted title={"My Items"}></Helmeted>
            <h1 className='text-center mt-2 mb-4' data-aos="fade-down">Your Added Items : {items.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{width:"100%"}}>
            {
                items.map(item => <PerUserItems item={item} key={item._id}></PerUserItems>)
            }
            </div>
        </div>
    );
};

export default MyItems;
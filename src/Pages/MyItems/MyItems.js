import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PerUserItems from '../PerUserItems/PerUserItems';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/items?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data?.users))
    }, [user])
    return (
        <div>
            <h1>this is my items:{items.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                items.map(item => <PerUserItems item={item} key={item._id}></PerUserItems>)
            }
            </div>
        </div>
    );
};

export default MyItems;
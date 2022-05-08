import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "https://shrouded-eyrie-37624.herokuapp.com/products"
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data?.allProducts))
    }, [products])

    return [products, setProducts]
};

export default AllProducts;
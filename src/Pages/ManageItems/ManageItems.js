import React,{useEffect,useState} from 'react';
import "./ManageItems.css"

const ManageItems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "http://localhost:4000/products"
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data?.allProducts))
    }, [products])


    const deleteDetails = (id) => {
        console.log(id);
        const proced = window.confirm("Are You Agree For Delete ?")
        if (proced){
            const url = `http://localhost:4000/products/${id}`
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
        <div >
            <h1 className='text-center my-3'>Inventory Total Products:{products.length}</h1>
            <table className='table table-striped table-dark'>
                <thead>
                <tr>
                <th scope="col text-black">Product Name</th>
                <th scope="col" >Price</th>
                <th scope="col" >Quentity</th>
                <th scope="col" >Supplier Name</th>
                <th scope="col" >Image</th>
                <th scope="col">
                    <span>Delete</span>
                </th>
                </tr>
                </thead>
                <tbody >
                    {
                        products.map(product=>{
                            return(
                                <tr >
                                    <th className='text' scope="row">{product.name}</th>
                                    <td >{product.price}</td>
                                    <td>{product.qty==0?"Sold Out":product.qty}</td>
                                    <td>{product.suppliername}</td>
                                    <td><img className='w-25' src={product.img} alt="" /></td>
                                    <td >
                                       < button className='updatebtn' onClick={()=>deleteDetails(product._id)} >Delete</button>
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

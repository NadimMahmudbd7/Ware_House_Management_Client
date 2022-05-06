import React from 'react';
import { Link } from 'react-router-dom';

const PerUserItems = ({item}) => {

   
    const deleteDetails = (id) => {
        console.log(id);
        const proced = window.confirm("Are You Agree For Delete ?")
        if (proced){
            const url = `http://localhost:4000/products/${id}`
            console.log(url);
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
        <div>
            <div className="col container">
                <div className="card h-100">
                    <img src={item.img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <h6 className="card-text">Price: Tk.{item.price}</h6>
                        <p className="card-text">Quentity: {item.qty==0?"Sold Out":item.qty}</p>
                        <p className="card-text"><small>Supplier-Name: {item.suppliername}</small></p>

                        <div className="card" style={{ width: "100%" }}></div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                            <Link to={`/updateproduct/${item._id}`}>
                            <button className="btn btn-primary me-md-2" type="button">Update Button</button>
                            </Link>
                            <button onClick={()=>deleteDetails(item._id)} className="btn btn-danger me-md-2" type="button">Delete Button</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerUserItems;
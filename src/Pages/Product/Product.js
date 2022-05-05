
import {Link,} from "react-router-dom";


const Product = ({ product }) => {

    

    return (
        <div>
            <div className="col container">
                <div className="card h-100">
                    <img src={product.img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <h6 className="card-text">Price: Tk.{product.price}</h6>
                        <p className="card-text">Quentity: {product.qty}</p>
                        <p className="card-text"><small>Supplier-Name: {product.suppliername}</small></p>

                        <div className="card" style={{ width: "100%" }}></div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                            <Link to={`/updateproduct/${product._id}`}>
                            <button className="updatebtn me-md-2" type="button">Update Button</button>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
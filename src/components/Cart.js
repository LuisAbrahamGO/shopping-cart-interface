import React, {useContext} from 'react';
import productContext from '../context/products/productContext';

const Cart = () => {

    const img = 'http://localhost:5000/';

    const context = useContext(productContext);
    const {productsLS, deleteItem, cleanCart} = context;

    return(
        <div className="cont">
                <ul className="cart-list">
                    <li className="submenu">
                        <i className="fas fa-shopping-cart">
                            <div id="cart">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productsLS.map((product, key) =>(
                                            <tr key={key}>
                                                <td><img src={img+product.image} alt="sample" className="img w-100"/></td>
                                                <td>{product.title}</td>
                                                <td>${product.price}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteItem(product._id)}>X</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button  onClick={cleanCart}className="btn btn-danger w-90">clean cart</button>
                            </div>
                        </i>
                    </li>
                </ul>
            </div>
    );
}

export default Cart;
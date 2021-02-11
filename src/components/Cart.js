import React, {useContext, useState, useEffect} from 'react';
import productContext from '../context/products/productContext';

const Cart = () => {

    const img = 'http://localhost:5000/';

    let [cartProduct, setCarProduct] = useState([]);

    const context = useContext(productContext);
    const {productsLS, deleteItem} = context;
    console.log(productsLS);

    const handleDelete = () => {
        /*cartProduct.forEach((prod, index) => {
            if(prod._id === product._id){
                setCarProduct(
                    cartProduct.splice(index, 1)
                )
            }
        })
        localStorage.setItem('products', JSON.stringify(cartProduct));*/
    } 

    useEffect(() => {

    }, [])

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
                                        {productsLS.map((product, key, index) =>(
                                            <tr key={key}>
                                                <td><img src={img+product.image} alt="sample" className="img w-100"/></td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteItem(index)}>X</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button  onClick={handleDelete}className="btn btn-danger w-90">clean cart</button>
                            </div>
                        </i>
                    </li>
                </ul>
            </div>
    );
}

export default Cart;
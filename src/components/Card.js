import React, {useContext} from 'react';
import productContext from '../context/products/productContext';

const Card = ({product}) => {

    const img = `http://localhost:5000/${product.image}`;

    const context = useContext(productContext);
    const {addProduct} = context;

    return (
            <div className="card">
                    <img className="card-img" src={img} alt="sample"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="price">${product.price}</p>
                    <button onClick={() => addProduct(product)} className="btn btn-primary" >Add</button>
                </div>
            </div>
    );
}
 
export default Card;



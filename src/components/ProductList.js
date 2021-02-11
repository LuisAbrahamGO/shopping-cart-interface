import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Row from './Row';


const ProductList = () => {

    //useState to get all products
    const [products, setProducts] = useState([]);
    let [productUp, setProductUp] = useState({});
    const [effect, setEffect] = useState(false);


    const onChange = () => {
        setEffect(true);
        setEffect(false);
    }

    const toModify = (data) => {
        setProductUp(
            productUp = data
        )
    }

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(products => setProducts(products));
    }, [effect]);

    return (
        <div className="productAdmin container">
            <div className="productList row ">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image id</th>
                        </tr>
                    </thead>
                    <tbody className="tablebody">
                        {products.map(product => (
                            <Row key={product._id} product={product} toModify={toModify} onChange={onChange}/>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="productForms row">
                <AddProduct onChange={onChange}/>
                <UpdateProduct productUp={productUp} onChange={onChange} toModify={toModify}/>
            </div>
        </div>
    );
}

export default ProductList;
import React from 'react';
import axios from 'axios';

const Row = ({product, toModify, onChange}) => {
    

    const handlePut = () => {
        toModify(product);
    }

    const handleDelete = (e) => {
        e.preventDefault();

        axios.delete(`http://localhost:5000/posts/${product._id}/${product.image}`)
        .then(response => { onChange(true) })
        .catch(error => {console.log(error)})
    }
    
    return(
        <tr>
            <th scope="row">{product._id}</th>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.image}</td>
            <td>
                <button onClick={handlePut} className="btn btn-success m-2"><i className="far fa-edit"></i></button>
                <button onClick={handleDelete} className="btn btn-danger"><i className="fas fa-trash"></i></button>
            </td>
        </tr>
    );
}

export default Row;
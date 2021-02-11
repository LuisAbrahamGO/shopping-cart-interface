import React, {useEffect, useState} from 'react'
import axios from 'axios';

const UpdateProduct = ({productUp, onChange, toModify}) => {


    const ref = React.createRef();
    //useState to put product
    let [product, setProduct] = useState({});

       
    useEffect(() => {
        setProduct(
            product = productUp
        )    
    }, [productUp])

    
    const handleImage = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.files[0]
        })

    }

    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })

    }

    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }

    //Update a post
    const handleUpdate = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("title", product.title !== "" ? product.title: productUp.title);
        form.append("description",  product.description !== "" ? product.description: productUp.description);
        form.append("price",  product.price !== "" ? product.price: productUp.price);
        form.append("image",  product.image !== null ? product.image: productUp.image);

        axios.patch(`http://localhost:5000/posts/${product._id}`, form, config)
            .then(response => { onChange(true) })
            .catch(error => { console.log(error) })

        ref.current.reset();
        setProduct(product = {})
        toModify(product);
    }

    return (
        <div className="addForm col-6">
                    <form ref={ref} onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label htmlFor="titleInput">Product name</label>
                            <input
                                onChange={handleOnChange}
                                type="text" 
                                className="form-control"
                                id="titleInput"
                                name="title"
                                placeholder={productUp.title}  
                            >
                            </input>
                            <label htmlFor="descInput">Description</label>
                            <textarea
                                onChange={handleOnChange}
                                type="text-area"
                                className="form-control"
                                id="descInput"
                                name="description"
                                placeholder={productUp.description}    
                            >
                            </textarea>
                            <label htmlFor="priceInput">Price</label>
                            <input
                                onChange={handleOnChange}
                                type="number"
                                className="form-control"
                                id="priceInput"
                                name="price"
                                placeholder={productUp.price}    
                            >
                            </input>
                            <label htmlFor="imageInput">Image</label>
                            <input
                                onChange={ handleImage}
                                type="file"
                                className="form-control"
                                id="imageInput"
                                name="image"
                            >
                            </input>
                            <input 
                                type="text"
                                className="form-control"
                                id="imageInput"
                                name="image"
                                placeholder={productUp.image}  
                                readOnly
                            >
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Accept</button>
                    </form>
                </div>
    );
}

export default UpdateProduct;
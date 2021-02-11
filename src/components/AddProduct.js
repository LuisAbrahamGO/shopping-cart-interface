import React, {useState} from 'react';
import axios from 'axios';

const AddProduct = ({onChange}) => {

    const ref = React.createRef();
    //useState to post product
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: 0
    });

    //Creates the new object to post
    const handleImage = (e) => {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.files[0],
            })

    }

    const handleOnChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        })
    }

    
    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }

    //Submit the new post
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("title", newProduct.title);
        form.append("description", newProduct.description);
        form.append("price", newProduct.price);
        form.append("image", newProduct.image);


        axios.post("http://localhost:5000/posts", form, config)
            .then(response => { onChange(true) })
            .catch(error => { console.log(error) })

        setNewProduct({
            title: "",
            description: "",
            price: 0,
        })
        
        ref.current.reset();
    }

    return(
        <div className="addForm col-6">
                    <form ref={ref} className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="titleInput">Product name</label>
                            <input
                                onChange={handleOnChange}
                                type="text" 
                                className="form-control"
                                id="titleInput"
                                name="title"
                                value={newProduct.title}    
                            >
                            </input>
                            <label htmlFor="descInput">Description</label>
                            <textarea
                                onChange={handleOnChange}
                                type="text-area"
                                className="form-control"
                                id="descInput"
                                name="description"
                                value={newProduct.description}
                            >
                            </textarea>
                            <label htmlFor="priceInput">Price</label>
                            <input
                                onChange={handleOnChange}
                                type="number"
                                className="form-control"
                                id="priceInput"
                                name="price"
                                value={newProduct.price}
                            >
                            </input>
                            <label htmlFor="imageInput">Image</label>
                            <input
                                onChange={handleImage}
                                type="file"
                                className="form-control"
                                id="imageInput"
                                name="image"
                            >
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Add</button>
                    </form>
                </div>
    );
}

export default AddProduct;
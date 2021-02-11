import React, { useEffect, useState } from 'react';
import Card from './Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Box = ({ products }) => {

    let [info, setInfo] = useState([]);

    useEffect(() => {
        if(products.length > 3){
            setInfo(
                info = products.slice(0, 3)
            )
        } else {
            setInfo(
                info = products
            )
        }
    }, [products])

    return (
        <div className="container">
            <Carousel>
                {info.map(product => 
                    <div key={product._id}>
                        <img src= {`http://localhost:5000/${product.image}`} alt="sample"/>
                        <p className="legend">{product.title}</p>
                    </div>    
                )}
            </Carousel>
            <div className="box">
                <h1>Products</h1>
                <div className="card-box">
                    {products.map((product)=> (
                        <Card 
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


//https://via.placeholder.com/700x400
export default Box;
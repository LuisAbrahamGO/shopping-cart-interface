import React, { Fragment, useEffect, useState } from 'react';
import Card from './Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel from './Carousel';

const Box = ({ products }) => {

    let [info, setInfo] = useState([]);

    useEffect(() => {
        if (products.length > 3) {
            setInfo(
                info = products.slice(0, 3)
            )
        } else {
            setInfo(
                info = products
            )
        }
    }, [])

    return (
        <div className="container__sup">
            <Carousel/>
            <div calss="container-box">
                <div className="box">
                    <div className="title">
                        <h1>Products</h1>
                    </div>
                    <div className="card-box">
                        {products.map((product) => (
                            <Card
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}


//https://via.placeholder.com/700x400
export default Box;
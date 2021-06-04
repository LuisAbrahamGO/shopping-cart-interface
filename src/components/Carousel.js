import { useState, useEffect, useRef, Fragment } from 'react';

const Carousel = () => {


    const img = `http://localhost:5000/example1.jpg`;
    const img2 = `http://localhost:5000/example2.jpg`;
    const img3 = `http://localhost:5000/example3.jpg`;
    const track = useRef(null);
    const [imgs, setImgs] = useState([img, img2, img3]);
    const [slides, setSlides] = useState([]);
    let [cont, setCont] = useState(0);
    let slideWidth;

    console.log(slides);
    console.log(slideWidth);


    useEffect(() => {
        try {
            setSlides(Array.from(track.current.children))
            slideWidth = slides[0].getBoundingClientRect().width;
        } catch (error) {
        }
    }, [track.current])



    const handleOnClikRight = () => {
        setCont(cont += 1)
        if (cont > 2) {
            setCont(cont = 0)
        }
        console.log(cont);
    }

    const handleOnClikLeft = () => {
        setCont(cont -= 1)
        if (cont < 0) {
            setCont(cont = 2)
        }
        console.log(cont);
    }


    return (
        <div className="carousel">
            <div className="carousel__button carousel__button--left" onClick={handleOnClikLeft}>
                <i className="fas fa-angle-left"></i>
            </div>

            <div className="carousel__track-container">

                <ul ref={track} className="carousel__track">
                    {imgs.map((image, index) =>
                        <li key={index.toString()} className="carousel__slide current-slide">
                            <img className="carousel__image" src={image} alt="example"></img>
                        </li>
                    )}
                </ul>
            </div>
            <div className="carousel__button carousel__button--right" onClick={handleOnClikRight}>
                <i className="fas fa-angle-right"></i>
            </div>

            <div className="carousel__nav">
                <button className="carousel__indicator current-slide"></button>
                <button className="carousel__indicator"></button>
                <button className="carousel__indicator"></button>
            </div>
        </div>
    );

}

export default Carousel;
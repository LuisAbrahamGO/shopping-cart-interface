import { useState, useEffect, useRef } from 'react';

const Carousel = () => {

    const img = `http://localhost:5000/example1.jpg`;
    const img2 = `http://localhost:5000/example2.jpg`;
    const img3 = `http://localhost:5000/example3.jpg`;
    const track = useRef(null);
    const dotsNav = useRef(null);
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);
    let [imgs, setImgs] = useState([img, img2, img3]);
    const [slides, setSlides] = useState([]);
    const [dots, setDots] = useState([]);
    let [slideWidth, setSlideWidth] = useState();



    useEffect(() => {
        try {
            setSlides(Array.from(track.current.children))
            setDots(Array.from(dotsNav.current.children))
        } catch (error) {
        }
    }, [])

    useEffect(() => {
        try {
            setSlideWidth(slides[0].getBoundingClientRect().width);
            //Move each image to the left starting from the first one
            slides.forEach((slide, index) => {
                slide.style.left = slideWidth * index + 'px';
            });
        } catch (error) {
        }
    }, [slides])

    const moveToSlide = (currentSlide, targetSlide) => {
        track.current.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if(targetIndex === 0){
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length-1){
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    const handleOnClikRight = () => {
        const slide = slides.filter((slide) => slide.classList[1] === 'current-slide');
        const nextSlide = slide[0].nextElementSibling;
        const dot = dots.filter((dot) => dot.classList[1] === 'current-slide');
        const nextDot = dot[0].nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        moveToSlide(slide[0], nextSlide);
        updateDots(dot[0], nextDot);
        hideShowArrows(slides, prevBtn.current, nextBtn.current, nextIndex);
    }

    const handleOnClikLeft = () => {
        const slide = slides.filter((slide) => slide.classList[1] === 'current-slide');
        const prevSlide = slide[0].previousElementSibling;
        const dot = dots.filter((dot) => dot.classList[1] === 'current-slide');
        const prevDot = dot[0].previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        moveToSlide(slide[0], prevSlide);
        updateDots(dot[0], prevDot);
        hideShowArrows(slides, prevBtn.current, nextBtn.current, prevIndex);
    }


    const handleDotClick = (e) => {
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const slide = slides.filter((slide) => slide.classList[1] === 'current-slide');
        const dot = dots.filter((dot) => dot.classList[1] === 'current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(slide[0], targetSlide);
        updateDots(dot[0], targetDot);
        hideShowArrows(slides, prevBtn.current, nextBtn.current, targetIndex);
    }



    return (
        <div className="carousel">
            <div className="carousel__button carousel__button--left is-hidden" ref={prevBtn} onClick={handleOnClikLeft}>
                <i className="fas fa-angle-left"></i>
            </div>

            <div className="carousel__track-container">

                <ul ref={track} className="carousel__track">
                    {imgs.map((image, index) =>
                        <li key={index.toString()} className={`carousel__slide ${index === 0 ? "current-slide" : ""}`}>
                            <img className="carousel__image" src={image} alt="example"></img>
                        </li>
                    )}
                </ul>
            </div>
            <div className="carousel__button carousel__button--right" ref={nextBtn} onClick={handleOnClikRight}>
                <i className="fas fa-angle-right"></i>
            </div>

            <div ref={dotsNav} onClick={handleDotClick} className="carousel__nav">
                {imgs.map((image, index) =>
                    <button key={index.toString()} className={`carousel__indicator ${index === 0 ? "current-slide" : ""}`}></button>
                )}
            </div>
        </div>
    );

}

export default Carousel;
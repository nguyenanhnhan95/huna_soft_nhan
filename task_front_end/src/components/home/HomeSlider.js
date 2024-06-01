import oneSlider from "../../img/home/one_slider.jpg"
import twoSlider from "../../img/home/two_slider.jpg"
import threeSlider from "../../img/home/three_slider.jpg"
import "../../css/sliderHome.css"
import { memo, useEffect, useRef, useState } from "react";
function HomeSlider() {
    const [active, setActive] = useState(0);
    const listRef = useRef(null);
    const dotsRef = useRef([]);
    let refreshSlider = useRef(null);
    const items = [
        oneSlider,
        twoSlider,
        threeSlider
    ];
    const lengthItems = items.length;

    useEffect(() => {
        refreshSlider.current = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(refreshSlider.current); // Cleanup on unmount
    }, []);
    useEffect(() => {

        reloadSlider();
    }, [active]);

    const prevSlide = () => {
        setActive((prevActive) => (prevActive - 1 + lengthItems) % lengthItems);
    };

    const nextSlide = () => {
        setActive((prevActive) => (prevActive + 1) % lengthItems);
    };

    const goToSlide = (index) => {
        setActive(index);
    };

    const reloadSlider = () => {
        const checkLeft = listRef.current.children[active].offsetLeft;
        listRef.current.style.left = -checkLeft + 'px';
        dotsRef.current.forEach((dot, index) => {
            if (index === active) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        clearInterval(refreshSlider.current);
        refreshSlider.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };
    return (
        <div className="slider container-lg">
            <div className="list" ref={listRef}>
                {items.map((src, index) => (
                    <div className="item" key={index}>
                        <img src={src} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button className="slider-prev" onClick={prevSlide}>&lt;</button>
                <button className="slider-next" onClick={nextSlide}>&gt;</button>
            </div>
            <div className="dots">
                {items.map((_, index) => (
                   <li
                   key={index}
                   className={index === active ? 'active' : ''}
                   onClick={() => goToSlide(index)}
                   ref={(el) => (dotsRef.current[index] = el)}
               ></li>
                ))}
            </div>
        </div>
    )
}
export default memo(HomeSlider);
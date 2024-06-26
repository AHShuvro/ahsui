import { useState, useRef } from "react";
import CarouselCodeContainer3 from "./CarouselCodeContainer3";

export const Carousel3 = () => {

    const hoverStyle = {
        cursor: `url(https://i.ibb.co/n754Ssx/icon-move-black.png) 16 16, auto`,
        backgroundColor: '#FFFFFF'
    };

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        { img: "https://i.ibb.co/Zm6CqNz/wp6304582-werewolf-minimalist-wallpapers.png", name: "Bryan Jhonson", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
        { img: "https://i.ibb.co/gZGmYGV/pexels-miguel-padri-n-3785935.jpg", name: "Jeremy Dupont", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
        { img: "https://i.ibb.co/g6z8pH7/mildly-useful-J433-OFf-Il-PQ-unsplash.jpg", name: "Gustav Fring", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
    ];

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const moveX = e.clientX - startX;
        if (moveX > 50) {
            setCurrentSlider(currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
            setIsDragging(false);
        } else if (moveX < -50) {
            setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
            setIsDragging(false);
        }
    };

    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    return (

        <div>

            <p className='text-[#000] font-bold pb-2'>Carousel with fades.</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div  className={`flex justify-center mb-8 overflow-hidden relative h-60 sm:h-[24rem] md:h-[34rem] select-none ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                ref={sliderRef}
                style={hoverStyle}>
                <>
                    <img className="h-full w-full" src={sliders[currentSlider].img} alt="" />
                    <div className='absolute bg-black opacity-20 w-full h-full'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <p className=' text-5xl text-white'>Carousel with Drag.</p>
                    </div>
                </>
            </div>
            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <CarouselCodeContainer3 />
            </div>
        </div>
    );
};

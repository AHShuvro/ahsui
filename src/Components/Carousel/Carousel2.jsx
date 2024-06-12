import { useCallback, useEffect, useState } from 'react';
import CarouselCodeContainer2 from './CarouselCodeContainer2';

const Carousel2 = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselImages = [
        'https://i.ibb.co/Zm6CqNz/wp6304582-werewolf-minimalist-wallpapers.png',
        'https://i.ibb.co/g6z8pH7/mildly-useful-J433-OFf-Il-PQ-unsplash.jpg',
        'https://i.ibb.co/Zm6CqNz/wp6304582-werewolf-minimalist-wallpapers.png',
        'https://i.ibb.co/g6z8pH7/mildly-useful-J433-OFf-Il-PQ-unsplash.jpg',
        'https://i.ibb.co/Zm6CqNz/wp6304582-werewolf-minimalist-wallpapers.png',
    ];

    const nextSlider = useCallback(() => setCurrentSlide((currentSlide) => currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1), [carouselImages.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlider();
        }, 4000);
        return () => clearInterval(interval);
    }, [nextSlider]);

    return (
        <div>
            <p className='text-[#000] font-bold pb-2'>Carousel with fades.</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex justify-center mb-8 overflow-hidden relative h-60 sm:h-[24rem] md:h-[34rem] ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
                {
                    carouselImages.map((slide, idx) => (
                        <>
                            <img className={`absolute top-0 left-0 w-full min-w-full h-60sm:h-[24rem] md:h-[34rem] object-cover  ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`} key={idx} src={slide} alt="" style={{ transition: 'opacity 2000ms ease-in-out' }}
                            />
                            <div className='absolute bg-black opacity-20 w-full h-full'></div>

                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <p className=' text-5xl text-white'>Carousel with fades.</p>
                            </div>
                        </>
                    ))
                }
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <CarouselCodeContainer2 />
            </div>
        </div>
    );
};

export default Carousel2;

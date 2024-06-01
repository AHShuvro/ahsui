import { useCallback, useEffect, useState } from 'react';
import CarouselCodeContainer from './CarouselCodeContainer';
import CarouselCodeContainer2 from './CarouselCodeContainer2';

const Carousel2 = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselImages = [
        'https://source.unsplash.com/1200x540/?hill',
        'https://source.unsplash.com/1200x540/?sea',
        'https://source.unsplash.com/1200x540/?waterfall',
        'https://source.unsplash.com/1200x540/?smook'
    ];

    const prevSlider = () => setCurrentSlide((currentSlide) => currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1);
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
                        <div className='absolute top-0 left-0 w-full min-w-full h-60sm:h-[24rem] md:h-[34rem]' key={idx}>
                            <img className={`absolute top-0 left-0 w-full min-w-full h-60sm:h-[24rem] md:h-[34rem] object-cover  ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`} src={slide} alt="" style={{ transition: 'opacity 2000ms ease-in-out' }}
                            />
                            <div className='absolute bg-black opacity-20 w-full h-full'></div>

                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <p className=' text-5xl text-white'>Carousel with fades.</p>
                            </div>
                        </div>
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

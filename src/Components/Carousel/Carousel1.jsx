
import { useCallback, useEffect, useState } from 'react';

const Carousel1 = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    const [currentSlide, setCurrentSlide] = useState(0)

    const carouselImages = ['https://source.unsplash.com/1200x540/?moon', 'https://source.unsplash.com/1200x540/?bird', 'https://source.unsplash.com/1200x540/?river', 'https://source.unsplash.com/1200x540/?rain'];

    const prevSlider = () => setCurrentSlide((currentSlide) => currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1);
    const nextSlider = useCallback(() => setCurrentSlide((currentSlide) => currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1), [carouselImages.length]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);


    return (
        <>

            <p className='text-[#000] font-bold pb-2'>Carousel with full width items</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex justify-center mb-8 overflow-hidden ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
                <div  className=" ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
                    {
                        carouselImages.map((slide, idx) => (
                            <img key={idx} src={slide} alt="" />
                        ))
                    }
                </div>
            </div>

            {/* <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <ButtonCodeContainer />
            </div> */}


        </>
    );
};

export default Carousel1;
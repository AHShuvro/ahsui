import Carousel1 from '../Components/Carousel/Carousel1';
import Carousel2 from '../Components/Carousel/Carousel2';

const CarouselPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4 mt-12'>Carousel</h3>
            <p className='text-[#0008] font-medium pb-8'>Building Dynamic Interfaces: Exploring the Carousel Component.</p>
            <div className='flex flex-col gap-1 sm:gap-3 xl:gap-8'>
                <Carousel1 />
                <Carousel2 />

            </div>
        </>
    );
};

export default CarouselPage;
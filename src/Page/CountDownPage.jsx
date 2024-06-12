import CountDown from '../Components/CountDown/CountDown1';

const CountDownPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4 mt-12'>Countdown</h3>
            <p className='text-[#0008] font-medium pb-8'>Building Dynamic Interfaces: Exploring the Carousel Component.</p>
            <div className='flex flex-col gap-1 sm:gap-3 xl:gap-8'>
                <CountDown />

            </div>
        </>
    );
};

export default CountDownPage;
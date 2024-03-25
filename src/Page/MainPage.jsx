import { Link } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';

const MainPage = () => {
    return (
        <>  
            <Header1/>
            <div className='mt-36 pl-11'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-7xl xxxl:text-8xl font-bold mb-10'><span className='text-[#EF1E7E]'>Explore ASHUI:</span> <br/>Free Component Library <br/>for Developers</h2>
                <h3 className='text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-8 '>Discover {`Tailwind's`} Treasure Trove: A World of <span className='text-[#EF1E7E]'>Free</span>, <span className='text-[#EF1E7E]'>Versatile</span>, <br />and <span className='text-[#EF1E7E]'>Customizable</span> Components Awaits Your Exploration</h3>
                <Link to={'/components'}><button className='text-xl text-white font-medium bg-[#EF1E7E] hover:bg-[#D4156A] px-6 py-2 rounded-sm'>Get Start</button></Link>
            </div>
        </>
    );
};

export default MainPage;
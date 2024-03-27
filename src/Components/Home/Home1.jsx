import Header1 from '../Header/Header1';
import { Link, Outlet } from 'react-router-dom';

function Home1() {




  return (

    <>
    <Header1/>
    
    <div className='flex justify-between xxxl:justify-center w-full gap-6 px-6'>
      <div className='h-screen w-[18.75rem] hidden lg:block '>
        <div className='flex justify-end'>
          <div className='flex flex-col gap-1 h-screen w-[18.75rem] lg:w-[14vw] xxl:w-[18.75rem] overflow-y-scroll fixed top-[6.25rem] pt-10 pr-4'>

            <Link to={'/components/accordion'}><li className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Accordion</li></Link>

            <Link to={'/components/modal'}><li className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Modal</li></Link>

            <Link to={'/components/button'}><li className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Button</li></Link>

            <Link to={'/components/swap'}><li className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Swap</li></Link>

          </div>
        </div>
      </div>
      <div className='xl:w-[60vw] flex-1 xl:flex-none pt-10'>

        <Outlet/>

      </div>

      <div className='h-screen w-[18.75rem] hidden xl:block'></div>
      
    </div>
    
    </>
  );
}

export default Home1;

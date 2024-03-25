import { useState } from 'react';
import Accordion from '../Accordions/Accordion';
import SwapPage from '../../Page/SwapPage';
import ModalPage from '../../Page/ModalPage';

function Home1() {
  const [currentPage, setCurrentPage] = useState('accordion');

  const renderPage = () => {
    switch (currentPage) {
      case 'accordion':
        return <Accordion />;
      case 'modal':
        return <ModalPage />;
      case 'swap':
        return <SwapPage />;
      default:
        return null;
    }
  };



  return (
    <div className='flex justify-between xxxl:justify-center w-full gap-6 px-6'>
      <div className='h-screen w-[18.75rem] hidden lg:block '>
        <div className='flex justify-end'>
          <div className='flex flex-col gap-1 h-screen w-[18.75rem] overflow-y-scroll fixed top-[6.25rem] pt-10 pr-4'>

            <li onClick={() => setCurrentPage('accordion')} className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Accordion</li>

            <li onClick={() => setCurrentPage('modal')} className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Modal</li>

            <li onClick={() => setCurrentPage('swap')} className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">Swap</li>

          </div>
        </div>
      </div>
      <div className='xl:w-[50vw] flex-1 xl:flex-none pt-10'>

        {renderPage()}

      </div>

      <div className='h-screen w-[18.75rem] hidden xl:block'></div>
      
    </div>
  );
}

export default Home1;

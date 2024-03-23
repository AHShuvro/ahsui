
import { Link } from 'react-router-dom';
import Accordion from '../Accordions/Accordion';
import Modal from '../Modal/Modal';

function Home1() {
  return (
    <>

      <div className='flex justify-between w-full gap-6 px-6'>
        <div className='h-screen w-[18.75rem] xxl:w-[14.75vw] hidden lg:block '>
          <div className=''>
            <div className='flex flex-col gap-1 h-screen w-[18.75rem] xxl:w-[14.75vw] overflow-y-scroll fixed top-[6.25rem] pt-10'>
              <Link><h3 className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none ' tabIndex="0">Accordion</h3></Link>
              <Link><h3 className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none ' tabIndex="0">Modal</h3></Link>
            </div>
          </div>
        </div>
        <div className=' xl:w-[50vw] flex-1 xl:flex-none pt-10'>
          <Accordion/>
          <Modal/>
        </div>
        <div className='h-screen w-[18.75rem] hidden xl:block'>
        </div>
      </div>
    </>
  )
}

export default Home1

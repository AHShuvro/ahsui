import { useState } from 'react';
import ButtonCodeContainer from './ButtonCodeContainer';

const Button = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    return (
        <>

            <p className='text-[#000] font-bold pb-2'>Button with hover</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl p-6 mb-8 ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
                <div className='grid grid-cols-2 md:grid-cols-4 xxl:grid-cols-6 place-items-center gap-6'>

                    <button className='relative text-xl text-white font-medium bg-[#EF1E7E] w-32 py-2 rounded-sm'>Normal</button>

                    <button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 py-2 border-2 border-[#EF1E7E] rounded-sm'>Hover Me</button>

                    <button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 py-2 border-2 border-[#EF1E7E] rounded-sm transition duration-500'>Hover Me</button>

                    <button className="relative py-2 w-32 origin-top transform border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium before:absolute before:top-0 before:block before:h-0 hover:before:h-full before:w-full hover:before:bg-[#EF1E7E] hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:text-white  before:duration-500">Hover Me</button>

                    <button type='button' className='relative py-2 w-32 origin-left border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium hover:text-white before:duration-700 before:absolute before:left-0 before:block before:w-0 hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-[#EF1E7E]  hover:before:top-0 hover:before:-z-10'>Hover Me</button>

                    <button className='overflow-hidden group relative py-2 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '><span className='bg-[#EF1E7E] absolute w-1/2 -translate-x-full group-hover:translate-x-0 left-0 top-0 bottom-0 duration-500 -z-10 '></span><span className='bg-[#000] absolute w-1/2 translate-x-full group-hover:translate-x-0 right-0 top-0 bottom-0 duration-500 -z-10 '></span>Hover Me</button>

                    <button className='overflow-hidden group relative py-2 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '><span className='bg-[#EF1E7E] absolute h-full -translate-y-full group-hover:translate-y-0 left-0 -top-full right-0 duration-500 -z-10 skew-y-[19deg] py-[33px]'></span><span className='bg-[#000] absolute h-full translate-y-full group-hover:translate-y-0 right-0 left-0 -bottom-full duration-500 -z-10 skew-y-[19deg] py-[33px]'></span>Hover Me</button>

                    <button className='overflow-hidden group relative py-2 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '><span className='bg-[#EF1E7E] absolute w-2/3 -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-500 -z-10 -skew-x-12'></span><span className='bg-[#EF1E7E] absolute w-1/2 translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-700 -z-10 -skew-x-12'></span>Hover Me</button>
                    
                    
                </div>
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <ButtonCodeContainer />
            </div>


        </>
    );
};

export default Button;
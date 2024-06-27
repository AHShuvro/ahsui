import { useState } from 'react';
import ButtonCodeContainer from './ButtonCodeContainer';

const Button1 = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    return (
        <>

            <p className='text-[#000] font-bold pb-2'>Button with animation</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl p-6 mb-8 ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
                <div className='grid grid-cols-2 md:grid-cols-4 place-items-center gap-6'>

                    <button className='relative text-xl text-white font-medium bg-[#EF1E7E] w-32 py-2 rounded-sm'>Get Start</button>

                    <button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 py-2 border-2 border-[#EF1E7E] rounded-sm'>Get Start</button>

                    <button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 py-2 border-2 border-[#EF1E7E] rounded-sm transition duration-500'>Get Start</button>

                    <button className="relative py-2 w-32 origin-top transform border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium before:absolute before:top-0 before:block before:h-0 before:w-full hover:before:bg-[#EF1E7E] hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:text-white hover:before:h-full before:duration-500">Get Start</button>
                </div>
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <ButtonCodeContainer />
            </div>


        </>
    );
};

export default Button1;
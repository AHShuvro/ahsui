import { useEffect, useState } from 'react';
import ButtonCodeContainer from './ButtonCodeContainer';

const Button = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview1");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    return (
        <>

            <p className='text-[#000] font-bold pb-2'>Button with color</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview1")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl p-6 ${activePreview === "buttonPriview1" ? 'block' : 'hidden'}`}>
                <div className='flex justify-center'>
                    <button className='text-xl text-white font-medium bg-[#EF1E7E] hover:bg-[#D4156A] px-6 py-2 rounded-sm'>Get Start</button>
                </div>
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <ButtonCodeContainer />
            </div>


        </>
    );
};

export default Button;
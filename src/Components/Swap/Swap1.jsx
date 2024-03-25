import { useState } from "react";
import SwapCodeContainer1 from "./SwapCodeContainer1";


const Swap1 = () => {

    const [activePreview, setActivePreview] = useState("swapPriview1");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    const [value, setValue] = useState(true);
    const handleSwap = (e) => {
        setValue(!e);
    }
    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Swap text</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("swapPriview1")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("swapJsx1")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl ${activePreview === "swapPriview1" ? 'block' : 'hidden'}`}>
                <div className='w-full bg-stone-50 px-8 py-6'>
                    <div className='flex items-center justify-center pl-1 pr-6'>
                        {
                            value ? <button className="text-2xl" onClick={() => handleSwap(true)}>ON</button>
                                :
                                <button className="text-2xl" onClick={() => handleSwap(false)}>OFF</button>
                        }
                    </div>
                </div>
            </div>

            <div className={`${activePreview === "swapJsx1" ? 'block' : 'hidden'}`}>
                <SwapCodeContainer1 />
            </div>

        </>
    );
};

export default Swap1;
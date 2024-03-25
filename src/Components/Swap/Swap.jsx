import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import SwapCodeContainer from "./SwapCodeContainer";


const Swap = () => {

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
            
            <p className='text-[#000] font-bold pb-2'>Swap volume icons</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("swapPriview1")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("swapJsx1")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl ${activePreview === "swapPriview1" ? 'block' : 'hidden'}`}>
                <div className='w-full bg-stone-50 px-8 py-6'>
                    <div className='flex items-center justify-center pl-1 pr-6'>
                        {
                            value ? <button onClick={() => handleSwap(true)}><MdOutlineLightMode className="text-4xl" /></button>
                                :
                                <button onClick={() => handleSwap(false)}><FaMoon className="text-4xl" /></button>
                        }
                    </div>
                </div>
            </div>

            <div className={`${activePreview === "swapJsx1" ? 'block' : 'hidden'}`}>
                <SwapCodeContainer />
            </div>

        </>
    );
};

export default Swap;
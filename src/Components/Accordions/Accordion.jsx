import { useState } from 'react';
import CodeContainer from './CodeContainer';

const Accordion = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (e) => {
        setActiveTab(e);
    };
    const [activePreview, setActivePreview] = useState("acordionPriview1");

    const handlePreview = (e) => {
        setActivePreview(e);
    };



    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Simple accordion</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionPriview1")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionJsx1")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl p-4 ${activePreview === "acordionPriview1" ? 'block' : 'hidden'}`}>
                <div className='w-full bg-gray-100 px-8 py-6 rounded-xl cursor-pointer' onClick={() => handleTabClick("tab1")}>
                    <div className='flex items-center justify-between pl-1 pr-6'>
                        <h3 className='text-xl font-semibold'>Click to open this one and close others</h3>

                    </div>
                    <div className={`pl-1 pt-2 pr-6 ${activeTab === "tab1" ? `block` : `hidden`} `}>
                        <p className='text-lg'>Hello!</p>
                    </div>
                </div>
                <div className='w-full bg-gray-100 px-8 py-6 rounded-xl cursor-pointer' onClick={() => handleTabClick("tab2")}>
                    <div className='flex items-center justify-between pl-1 pr-6'>
                        <h3 className='text-xl font-semibold'>Click to open this one and close others</h3>

                    </div>
                    <div className={`pl-1 pt-2 pr-6 ${activeTab === "tab2" ? `block` : `hidden`} `}>
                        <p className='text-lg'>Hello!</p>
                    </div>
                </div>
                <div className='w-full bg-gray-100 px-8 py-6 rounded-xl cursor-pointer' onClick={() => handleTabClick("tab3")}>
                    <div className='flex items-center justify-between pl-1 pr-6'>
                        <h3 className='text-xl font-semibold'>Click to open this one and close others</h3>

                    </div>
                    <div className={`pl-1 pt-2 pr-6 ${activeTab === "tab3" ? `block` : `hidden`} `}>
                        <p className='text-lg'>Hello!</p>
                    </div>
                </div>
            </div>

            <div className={`${activePreview === "acordionJsx1" ? 'block' : 'hidden'}`}>
                <CodeContainer />
            </div>





        </>
    );
};

export default Accordion;
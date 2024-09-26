
import { useState } from 'react';

import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import AccordionCodeContainer2 from './AccordionCodeContainer2';


const Accordion2 = () => {

    const [activePreview, setActivePreview] = useState("acordionPriview2");

    const handlePreview = (e) => {
        setActivePreview(e);
    };


    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    const tabs = [
        {
            id: 'tab1',
            title: 'Modern Design Concepts',
            content: 'Explore modern web design techniques that stand out with minimalism and bold typography.',
            icon: <FaArrowDown />,
        },
        {
            id: 'tab2',
            title: 'Advanced Animations',
            content: 'Learn how to use advanced CSS and JavaScript animations for dynamic, engaging user experiences.',
            icon: <FaArrowDown />,
        },
        {
            id: 'tab3',
            title: 'Responsive Layouts',
            content: 'Understand the principles of creating responsive web layouts that work seamlessly on all devices.',
            icon: <FaArrowDown />,
        },
    ];



    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Colorful accordion</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionPriview2")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionJsx2")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl p-4  ${activePreview === "acordionPriview2" ? 'block' : 'hidden'}`}>
                {tabs.map((tab) => (
                    <div key={tab.id} className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl p-6 shadow-lg transition duration-300 transform hover:scale-105">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => handleTabClick(tab.id)}
                        >
                            <h3 className="text-xl font-semibold">{tab.title}</h3>
                            <span className="ml-4">{activeTab === tab.id ? <FaArrowUp /> : tab.icon}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === tab.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="mt-4 p-4 bg-white rounded-lg text-black shadow-md">
                                <p>{tab.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${activePreview === "acordionJsx2" ? 'block' : 'hidden'}`}>
                <AccordionCodeContainer2 />
            </div>





        </>
    );
};

export default Accordion2;
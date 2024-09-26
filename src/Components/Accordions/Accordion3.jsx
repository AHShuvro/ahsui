
import { useState } from 'react';
import AccordionCodeContainer3 from './AccordionCodeContainer3';

const Accordion3 = () => {

    const [activePreview, setActivePreview] = useState("acordionPriview1");

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
            title: 'What is a Minimalist Web Design?',
            content: 'Minimalist design focuses on simplicity, usability, and essential elements to enhance user experience.',
        },
        {
            id: 'tab2',
            title: 'Why Use Responsive Web Design?',
            content: 'Responsive design ensures that a website looks great and functions well across all devices and screen sizes.',
        },
        {
            id: 'tab3',
            title: 'The Importance of Typography in Design',
            content: 'Typography plays a crucial role in the overall aesthetics and readability of a website or application.',
        },
    ];


    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Simple accordion</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionPriview1")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionJsx1")}>React</p>
            </div>

            <div className={`flex border border-stone-300 rounded-2xl p-4 mb-8 ${activePreview === "acordionPriview1" ? 'block' : 'hidden'}`}>
                <div className="flex flex-col gap-4 p-6 max-w-xl mx-auto">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`border-b border-gray-300 transition duration-300 ease-in-out pb-4 ${activeTab === tab.id ? 'border-b-2 border-blue-600' : ''}`}
                        >
                            <div
                                className="flex items-center justify-between cursor-pointer py-3"
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <h3 className={`text-lg font-medium transition duration-300 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-700'}`}>
                                    {tab.title}
                                </h3>
                                <span
                                    className={`transition-transform transform ${activeTab === tab.id ? 'rotate-180 text-blue-600' : 'rotate-0 text-gray-500' }`}
                                >
                                    ▼
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === tab.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' }`}
                            >
                                <p className="text-gray-600 mt-3">{tab.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${activePreview === "acordionJsx1" ? 'block' : 'hidden'}`}>
                <AccordionCodeContainer3 />
            </div>





        </>
    );
};

export default Accordion3;


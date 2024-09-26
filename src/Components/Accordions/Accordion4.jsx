import { useState } from 'react';
import CodeContainer from './CodeContainer';
import AccordionCodeContainer4 from './AccordionCodeContainer4';

const Accordion4 = () => {

    const [activePreview, setActivePreview] = useState("acordionPriview");

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
            title: 'Introduction to Web Design',
            content: 'Web design is all about creating websites that are functional, easy to use, and visually appealing.',
        },
        {
            id: 'tab2',
            title: 'Understanding UI/UX',
            content: 'UI/UX design focuses on how a product feels, its ease of use, and how users interact with it.',
        },
        {
            id: 'tab3',
            title: 'Advanced CSS Techniques',
            content: 'Advanced CSS includes grid systems, animations, and custom properties for flexible and efficient layouts.',
        },
    ];



    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Simple accordion</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("acordionJsx")}>React</p>
            </div>

            <div className={`flex gap-2 border border-stone-300 rounded-2xl p-4 ${activePreview === "acordionPriview" ? 'block' : 'hidden'}`}>
                <div className="w-1/3 bg-gray-100 p-4 rounded-l-lg">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`p-4 mb-2 cursor-pointer font-medium text-gray-700 rounded transition-all duration-300 ease-in-out
                            ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.title}
                        </div>
                    ))}
                </div>

                <div className="w-2/3 bg-white p-6 rounded-r-lg">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`transition-all duration-500 ease-in-out overflow-hidden
                            ${activeTab === tab.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{tab.title}</h3>
                            <p className="text-gray-600">{tab.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${activePreview === "acordionJsx" ? 'block' : 'hidden'}`}>
                <AccordionCodeContainer4 />
            </div>





        </>
    );
};

export default Accordion4;
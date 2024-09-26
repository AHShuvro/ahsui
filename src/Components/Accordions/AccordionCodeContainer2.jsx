
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const AccordionCodeContainer2 = () => {
    const code = {
        a: `
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
    
const Accordion = () => {
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
            content: 'Learn how to use advanced CSS and JavaScript animations for dynamic, engaging user            experiences.',
            icon: <FaArrowDown />,
        },
        {
            id: 'tab3',
            title: 'Responsive Layouts',
            content: 'Understand the principles of creating responsive web layouts that work seamlessly on all          devices.',
            icon: <FaArrowDown />,
        },
    ];

    return (
        <div className="flex flex-col gap-6 p-6 bg-gray-50 rounded-lg shadow-lg">
            {tabs.map((tab) => (
                <div key={tab.id} className="relative bg-gradient-to-r from-indigo-500 via-purple-500           to-pink-500 text-white rounded-xl p-6 shadow-lg transition duration-300 transform           hover:scale-105">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <h3 className="text-xl font-semibold">{tab.title}</h3>
                        <span className="ml-4">{activeTab === tab.id ? <FaArrowUp /> : tab.icon}</span>
                    </div>
                    <div className={\`overflow-hidden transition-all duration-500 ease-in-out \${activeTab ===          tab.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}\`}>
                        <div className="mt-4 p-4 bg-white rounded-lg text-black shadow-md">
                            <p>{tab.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

        `
    }

    return (
        <div>
            <AceEditor
                mode="jsx"
                theme="cobalt"
                value={code.a}
                onChange={(newValue) => console.log('Change', newValue)}
                name="code-editor"
                fontSize={14}
                width="100%"
                height="500px"
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
};

export default AccordionCodeContainer2;





import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const AccordionCodeContainer3 = () => {
    const code = {
        a: `
import { useState } from 'react';
    
const Accordion = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    const tabs = [
        {
            id: 'tab1',
            title: 'What is a Minimalist Web Design?',
            content: 'Minimalist design focuses on simplicity, usability, and essential elements to enhance user            experience.',
        },
        {
            id: 'tab2',
            title: 'Why Use Responsive Web Design?',
            content: 'Responsive design ensures that a website looks great and functions well across all devices            and screen sizes.',
        },
        {
            id: 'tab3',
            title: 'The Importance of Typography in Design',
            content: 'Typography plays a crucial role in the overall aesthetics and readability of a website or             application.',
        },
    ];

    return (
        <div className="flex flex-col gap-4 p-6 max-w-xl mx-auto">
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={\`border-b border-gray-300 transition duration-300 ease-in-out pb-4 \${
                        activeTab === tab.id ? 'border-b-2 border-blue-600' : ''
                    }\`}
                >
                    <div
                        className="flex items-center justify-between cursor-pointer py-3"
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <h3 className={\`text-lg font-medium transition duration-300 \${activeTab === tab.id ?          'text-blue-600' : 'text-gray-700'}\`}>
                            {tab.title}
                        </h3>
                        <span
                            className={\`transition-transform transform \${
                                activeTab === tab.id ? 'rotate-180 text-blue-600' : 'rotate-0 text-gray-500'
                            }\`}
                        >
                            ▼
                        </span>
                    </div>
                    <div
                        className={\`overflow-hidden transition-all duration-500 ease-in-out \${
                            activeTab === tab.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }\`}
                    >
                        <p className="text-gray-600 mt-3">{tab.content}</p>
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

export default AccordionCodeContainer3;

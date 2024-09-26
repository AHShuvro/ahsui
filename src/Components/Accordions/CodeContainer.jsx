import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const CodeContainer = () => {
    const code = {
        a: `
import { useState } from 'react';

const Accordion = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (e) => {
        setActiveTab(e);
    };

    return (
        <>
            <div className='flex flex-col gap-2 border border-stone-300 rounded-2xl p-4'>
                <div className='bg-gray-100 px-8 py-6 rounded-xl cursor-pointer' onClick={() => handleTabClick("tab1")}>
                    <div className='flex items-center justify-between pl-1 pr-6'>
                        <h3 className='text-xl font-semibold'>Click to open this one and close others</h3>
                    </div>
                    <div className={\`pl-1 pt-2 pr-6 \${activeTab === "tab1" ? \`block\` : \`hidden\`} \`}>
                        <p className='text-lg'>Hello!</p>
                    </div>
                </div>
                <div className='bg-gray-100 px-8 py-6 rounded-xl cursor-pointer' onClick={() => handleTabClick("tab2")}>
                    <div className='flex items-center justify-between pl-1 pr-6'>
                        <h3 className='text-xl font-semibold'>Click to open this one and close others</h3>
                    </div>
                    <div className={\`pl-1 pt-2 pr-6 \${activeTab === "tab2" ? \`block\` : \`hidden\`} \`}>
                        <p className='text-lg'>Hello!</p>
                    </div>
                </div>
                <div className='bg-gray-100 px-8 py-6 rounded-xl cursor-pointer' onClick={() => handleTabClick("tab3")}>
                    <div className='flex items-center justify-between pl-1 pr-6'>
                        <h3 className='text-xl font-semibold'>Click to open this one and close others</h3>
                    </div>
                    <div className={\`pl-1 pt-2 pr-6 \${activeTab === "tab3" ? \`block\` : \`hidden\`} \`}>
                        <p className='text-lg'>Hello!</p>
                    </div>
                </div>
            </div>
        </>
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

export default CodeContainer;

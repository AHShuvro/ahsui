import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const SwapCodeContainer = () => {
    const code = {
        a: `
        import { useState } from "react";
        import { MdOutlineLightMode } from "react-icons/md";
        import { FaMoon } from "react-icons/fa";
        
        
        const Swap = () => {
        
        
            const [value, setValue] = useState(true);
            const handleSwap = (e) => {
                setValue(!e);
            }
            return (
                <>
        
                    <div className={\`flex flex-col gap-2 border border-stone-300 rounded-2xl \`}>
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
        
                </>
            );
        };
        
        export default Swap;
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

export default SwapCodeContainer;

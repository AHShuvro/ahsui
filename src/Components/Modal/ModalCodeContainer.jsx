import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const ModalCodeContainer = () => {
    const code = {
        a: `
import { useEffect, useState } from "react";

const Modal = () => {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setModal(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            
            <div className={\`flex flex-col gap-2 border border-stone-300 rounded-2xl \`}>
                <div className='w-full bg-stone-50 px-8 py-6 '>
                    <div className='flex items-center justify-center pl-1 pr-6'>
                        <h3 className='text-base font-semibold bg-gray-200 rounded-lg px-6 py-4 cursor-pointer' onClick={toggleModal}>Open Modal</h3>
                    </div>
                </div>
            </div>

            {
                modal && <div className="w-screen h-screen top-0 right-0 bottom-0 left-0 fixed bg-[#0007] z-20 flex items-center justify-center ">
                    <div className=" bg-white text-black w-3/4 sm:w-4/5 md:w-3/6 xl:w-1/4 xxl:w-1/4 p-8 rounded-xl">
                        <h3 className="text-4xl pb-4">Hello Modal</h3>
                        <p className="text-lg">To close, either press the {\`"ESC"\`} key or click the button below.</p>
                        <div className="flex justify-end mt-6">
                            <h3 className='text-base font-semibold bg-gray-200 rounded-lg w-24 px-4 py-4 text-center cursor-pointer' onClick={toggleModal} >Close</h3>
                        </div>
                    </div>
                </div>
            }

            
        </>
    );
};

export default Modal;
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

export default ModalCodeContainer;

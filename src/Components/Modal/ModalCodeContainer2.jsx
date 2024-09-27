import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const ModalCodeContainer2 = () => {
    const code = {
        a: `
import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

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
        setModal(!modal);
    }

    return (
        <>
            {/* Open Button */}
            <div className="flex justify-center mt-20">
                <button
                    className="relative text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 px-10 py-5 rounded-full shadow-lg transition-transform duration-300 hover:rotate-12"
                    onClick={toggleModal}
                >
                    Open Modal
                </button>
            </div>

            {
                modal && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center transition-all duration-500 ease-in-out">
                        
                        {/* Modal Content */}
                        <div className="bg-white w-11/12 sm:w-3/4 md:w-2/5 xl:w-1/3 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100 rotate-0 hover:rotate-2">
                            
                            {/* Close Button */}
                            <button
                                className="absolute top-5 right-5 text-gray-400 hover:text-red-600 transition-transform duration-300 transform hover:rotate-45"
                                onClick={toggleModal}
                            >
                                <AiOutlineClose size={24} />
                            </button>

                            {/* Title */}
                            <h3 className="text-3xl font-semibold text-teal-600 text-center mb-8">New Minimal Modal</h3>

                            {/* Content */}
                            <p className="text-lg text-gray-700 leading-relaxed text-center">
                                This modal is designed with a clean, minimalist style. The rotation effects make it stand out while keeping it simple and usable.
                            </p>

                            {/* Action Button */}
                            <div className="flex justify-center mt-10">
                                <button
                                    className="text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-full shadow-md transition-transform duration-300 hover:rotate-6"
                                    onClick={toggleModal}
                                >
                                    Close Modal
                                </button>
                            </div>
                        </div>
                    </div>
                )
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

export default ModalCodeContainer2;


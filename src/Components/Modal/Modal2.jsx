import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import ModalCodeContainer2 from "./ModalCodeContainer2";

const Modal2 = () => {
    const [modal, setModal] = useState(false);
    const [activePreview, setActivePreview] = useState("modalPriview1");

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
    };

    const handlePreview = (preview) => {
        setActivePreview(preview);
        setModal(false);
    };

    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Modal with beautiful color</p>

            <div className='flex gap-4 p-2'>
                <p className={`cursor-pointer px-2 py-1 ${activePreview === "modalPriview1" ? "bg-[#EF1E7E] text-white" : "bg-[#ef1e7f1a]"} hover:bg-[#EF1E7E] hover:text-white rounded-md`}
                    onClick={() => handlePreview("modalPriview1")}>
                    Preview
                </p>
                <p className={`cursor-pointer px-2 py-1 ${activePreview === "modalJsx" ? "bg-[#EF1E7E] text-white" : "bg-[#ef1e7f1a]"} hover:bg-[#EF1E7E] hover:text-white rounded-md`}
                    onClick={() => handlePreview("modalJsx")}>
                    React
                </p>
            </div>

            {activePreview === "modalPriview1" && (
                <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl py-6`}>
                    <div className={`flex justify-center`}>
                        <button
                            className="relative text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 px-10 py-5 rounded-full shadow-lg transition-transform duration-300 hover:rotate-12"
                            onClick={toggleModal}
                        >
                            Open Modal
                        </button>
                    </div>
                </div>
            )}

            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center transition-all duration-500 ease-in-out">
                    <div className="bg-white w-11/12 sm:w-3/4 md:w-2/5 xl:w-1/3 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100 rotate-0 hover:rotate-2">
                        <button
                            className="absolute top-5 right-5 text-gray-400 hover:text-red-600 transition-transform duration-300 transform hover:rotate-45"
                            onClick={toggleModal}
                        >
                            <AiOutlineClose size={24} />
                        </button>

                        <h3 className="text-3xl font-semibold text-teal-600 text-center mb-8">New Minimal Modal</h3>

                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                            This modal is designed with a clean, minimalist style. The rotation effects make it stand out while keeping it simple and usable.
                        </p>

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
            )}

            {activePreview === "modalJsx" && (
                <div className="mt-4">
                    <ModalCodeContainer2 />
                </div>
            )}
        </>
    );
};

export default Modal2;

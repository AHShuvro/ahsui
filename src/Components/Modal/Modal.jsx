import { useEffect, useState } from "react";
import ModalCodeContainer from "./ModalCodeContainer";

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

    const [activePreview, setActivePreview] = useState("modalPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Responsive</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("modalPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("modalJsx")}>React</p>
            </div>

            <div className={`flex flex-col gap-2 border border-stone-300 rounded-2xl ${activePreview === "modalPriview" ? 'block' : 'hidden'}`}>
                <div className='w-full bg-stone-50 px-8 py-6'>
                    <div className='flex items-center justify-center pl-1 pr-6'>
                        <h3 className='text-base font-semibold bg-gray-200 rounded-lg px-6 py-4 cursor-pointer' onClick={toggleModal}>Open Modal</h3>
                    </div>
                </div>
            </div>

            {
                modal && <div className="w-screen h-screen top-0 right-0 bottom-0 left-0 fixed bg-[#0007] z-20 flex items-center justify-center ">
                    <div className=" bg-white text-black w-3/4 sm:w-4/5 md:w-3/6 xl:w-1/4 xxl:w-1/4 p-8 rounded-xl">
                        <h3 className="text-4xl pb-4">Hello Modal</h3>
                        <p className="text-lg">To close, either press the {`"ESC"`} key or click the button below.</p>
                        <div className="flex justify-end mt-6">
                            <h3 className='text-base font-semibold bg-gray-200 rounded-lg w-24 px-4 py-4 text-center cursor-pointer' onClick={toggleModal} >Close</h3>
                        </div>
                    </div>
                </div>
            }

            <div className={`${activePreview === "modalJsx" ? 'block' : 'hidden'}`}>
                <ModalCodeContainer/>
            </div>
        </>
    );
};

export default Modal;
import Modal from "../Components/Modal/Modal";

const ModalPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4 mt-12'>Modal</h3>
            <p className='text-[#0008] font-medium pb-8'>A modal is a pop-up window that overlays the current page for focused interactions.</p>
            <div>
                <Modal/>
            </div>
        </>
    );
};

export default ModalPage;
import Accordion from '../Components/Accordions/Accordion';
import Accordion2 from '../Components/Accordions/Accordion2';
import Accordion3 from '../Components/Accordions/Accordion3';
import Accordion4 from '../Components/Accordions/Accordion4';

const AccordionsPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4'>Accordion</h3>
            <p className='text-[#0008] font-medium pb-4'>Accordion components facilitate displaying and concealing content, ensuring that only one item remains open at any given moment.</p>
            <div>
                <Accordion />
                <Accordion2 />
                <Accordion3 />
                <Accordion4 />

            </div>
        </>
    );
};

export default AccordionsPage;
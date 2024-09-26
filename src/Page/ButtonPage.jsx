import Button from '../Components/Button/Button';
import Button1 from '../Components/Button/Button1';

const ButtonPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4 mt-12'>Button</h3>
            <p className='text-[#0008] font-medium pb-8'>Buttons allow the user to take actions or make choices.</p>
            <div>
                <Button />
                <Button1/>

            </div>
        </>
    );
};

export default ButtonPage;
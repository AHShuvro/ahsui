import Rating1 from "../Components/Rating/Rating1";
import Rating2 from "../Components/Rating/Rating2";
import Rating3 from "../Components/Rating/Rating3";

const RatingPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4 mt-12'>Rating</h3>
            <p className='text-[#0008] font-medium pb-8'>Rate Your Experience: Select from the Options Below.</p>
            <div>
                <Rating1 />
                <Rating2 />
                <Rating3 />
            </div>
        </>
    );
};

export default RatingPage;
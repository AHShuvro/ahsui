import Swap from "../Components/Swap/Swap";
import Swap1 from "../Components/Swap/Swap1";

const SwapPage = () => {
    return (
        <>
            <h3 className='text-4xl font-bold pb-4 mt-12'>Swap</h3>
            <div>
                <Swap />
                <Swap1 />
            </div>
        </>
    );
};

export default SwapPage;
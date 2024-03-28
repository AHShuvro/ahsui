import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import ComponentsList from '../Components/ComponentsList';


const Home = () => {



    return (
        <>
            <Header1 />

            <div className='flex justify-between xxxl:justify-center w-full gap-6 px-6'>
                <div className='h-screen w-[18.75rem] hidden lg:block '>
                    <div className='flex justify-end'>
                    <div className='flex flex-col gap-1 h-screen w-[18.75rem] lg:w-[14vw] xxl:w-[18.75rem] overflow-y-scroll fixed top-[6.25rem] pt-10 pr-4'>

                        <ComponentsList/>

                        </div>

                    </div>
                </div>
                <div className='xl:w-[60vw] flex-1 xl:flex-none pt-10'>

                    <Outlet />

                </div>

                <div className='h-screen w-[18.75rem] hidden xl:block'></div>

            </div>
        </>
    );
};

export default Home;
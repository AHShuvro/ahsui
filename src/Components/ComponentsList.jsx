import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { components } from '../Data/AllData';


const ComponentsList = () => {
    const [dorpDown, setDropDown] = useState(true)

    const handleDropdown = (e) => {
        setDropDown(!e)
    }


    return (
            
                <>
                <div onClick={() => handleDropdown(dorpDown)} className='flex items-center justify-between text-xl cursor-pointer my-2'>
                    <button className=' font-bold px-2 list-none' tabIndex="0">Components</button>
                    <MdKeyboardArrowDown />
                </div>

                {
                    dorpDown ?
                    components.sort().map((item, idx) => (
                            <Link key={idx} to={`/components/${item}`}><li className='text-[1rem] font-semibold py-1 px-4 hover:text-[#EF1E7E] hover:bg-[#ef1e7f1a] focus:text-white focus:bg-[#EF1E7E] rounded-2xl list-none cursor-pointer' tabIndex="0">{item}</li></Link>
                        ))
                        :
                        <div></div>
                }

            </>
    );
};

export default ComponentsList;
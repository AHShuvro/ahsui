import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";


const Header1 = () => {
    return (




        <div className="navbar bg-[#EF1E7E] h-[4.5rem] sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>


                <Link to={'/'}><img className="h-[4rem]" src="./ahsui.png" alt="" /></Link>


            </div>
            <div className="navbar-end">

                <div className="hidden sm:block">


                    <label htmlFor="my_modal_7">
                        <div className=" h-[2rem] w-[5rem] sm:w-[10rem] md:w-[14rem] border border-black rounded-md bg-white px-4 flex items-center gap-4">
                            <CiSearch className="text-[#EF1E7E] text-xl font-extrabold " />
                            <p className="text-gray-500 text-base">Search</p>
                        </div>
                    </label>
                </div>
                <CiSearch className="text-[#EF1E7E] text-xl font-extrabold sm:hidden " />
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-[#FFFFFF]">
                    <li><Link to={'/components'} className="font-medium text-base">Components</Link></li>
                    <li><a className="font-medium text-base">Premium</a></li>
                </ul>
            </div>



            <div>
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </div>

        </div>
    );
};

export default Header1;
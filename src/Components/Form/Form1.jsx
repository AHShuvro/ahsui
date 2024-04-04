
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { useState } from 'react';
import FormCodeContainer from "./FormCodeContainer";

const Form1 = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };

    return (
        <>

            <p className='text-[#000] font-bold pb-2'>Simple form</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`mb-8 overflow-hidden ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
                <div className='bg-slate-200 flex justify-center items-center'>
                    <div className="w-full max-w-md bg-[#ffffff] px-8 py-20 my-8 rounded-xl">
                        <h3 className="mb-12 text-4xl font-bold text-center">Login</h3>
                        <div className="flex flex-col gap-1 mb-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Type your username" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1  " />
                        </div>
                        <div className="flex flex-col gap-1 mb-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Type your password" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1  " />
                        </div>
                        <div className="text-end">
                            <a href="#" className="hover:underline text-sm text-gray-600">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                            <button className='relative text-xl text-white font-medium bg-[#EF1E7E] hover:bg-[#D4156A]  w-full py-1 border-2 border-[#EF1E7E] rounded-full transition duration-500 mt-6'>LOGIN</button>
                        </div>
                        <div className="flex items-center mt-6 space-x-2">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <p className="text-sm text-gray-600">Or Sign Up Using</p>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>
                        <div className="flex gap-4 justify-center mt-4">
                            <FaFacebook className="text-3xl text-[#1877F2]" />
                            <AiFillGoogleCircle className="text-3xl text-[#EA4335]" />
                            <FaGithub className="text-3xl text-[#24292E]" />
                        </div>
                        <p className="text-center text-sm text-gray-600 mt-6">Don't have an account?
                            <span><a href="#" className="hover:underline"> Sign up</a></span>
                        </p>

                    </div>
                </div>
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <FormCodeContainer />
            </div>


        </>
    );
};

export default Form1;
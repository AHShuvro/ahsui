
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-javascript';

const FormCodeContainer = () => {
    const code = {
        a: `
            import { FaFacebook } from "react-icons/fa";
            import { AiFillGoogleCircle } from "react-icons/ai";
            import { FaGithub } from "react-icons/fa6";

            const Form1 = () => {
                return (
                    <>
                        <div className='bg-slate-200 flex justify-center items-center rounded-xl'>
                            <div className="w-full max-w-md bg-[#ffffff] px-8 py-20 my-0 md:my-8 rounded-xl shadow-lg">
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
                    </>
                );
            };

            export default Form1;
        `
    }

    return (
        <div>
            <AceEditor
                mode="javascript"
                theme="twilight"
                value={code.a}
                onChange={(newValue) => console.log('Change', newValue)}
                name="code-editor"
                fontSize={14}
                width="100%"
                height="500px"
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
};

export default FormCodeContainer;




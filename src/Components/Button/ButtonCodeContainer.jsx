
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-javascript';


const ButtonCodeContainer = () => {
    const code = {
        a: `
        <button className='relative text-xl text-white font-medium bg-[#EF1E7E] w-32 py-2 rounded-sm'>Get Start</button>

        <button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 py-2 border-2 border-[#EF1E7E] rounded-sm'>Get Start</button>

        <button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 py-2 border-2 border-[#EF1E7E] rounded-sm transition duration-500'>Get Start</button>

        <button className="relative py-2 w-32 origin-top transform border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium before:absolute before:top-0 before:block before:h-0 hover:before:h-full before:w-full hover:before:bg-[#EF1E7E] hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:text-white  before:duration-500">Get Start</button>

        <button className='relative py-2 w-32 origin-left border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium hover:text-white before:duration-700 before:absolute before:left-0 before:block before:w-0 hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-[#EF1E7E]  hover:before:top-0 hover:before:-z-10'>Get Start</button>

        <button className='overflow-hidden group relative py-2 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '><span className='bg-[#EF1E7E] absolute w-1/2 -translate-x-full group-hover:translate-x-0 left-0 top-0 bottom-0 duration-500 -z-10 '></span><span className='bg-[#000] absolute w-1/2 translate-x-full group-hover:translate-x-0 right-0 top-0 bottom-0 duration-500 -z-10 '></span>Get Start</button>

        <button className='overflow-hidden group relative py-2 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '><span className='bg-[#EF1E7E] absolute h-full -translate-y-full group-hover:translate-y-0 left-0 -top-full right-0 duration-500 -z-10 skew-y-[20deg] py-[33px]'></span><span className='bg-[#000] absolute h-full translate-y-full group-hover:translate-y-0 right-0 left-0 -bottom-full duration-500 -z-10 skew-y-[20deg] py-[33px]'></span>Get Start</button>

        <button className='overflow-hidden group relative py-2 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '><span className='bg-[#EF1E7E] absolute w-2/3 -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-500 -z-10 -skew-x-12'></span><span className='bg-[#EF1E7E] absolute w-1/2 translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-700 -z-10 -skew-x-12'></span>Get Start</button>
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

export default ButtonCodeContainer;

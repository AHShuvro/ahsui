
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const ButtonCodeContainer = () => {
    const code = {
        a: `
<button className='relative text-xl text-white font-medium bg-[#EF1E7E] w-32 h-12 rounded-sm'>
    Normal
</button>

<button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 h-12 border-2 border-[#EF1E7E] rounded-sm'>
    Hover Me
</button>

<button className='relative text-xl text-[#EF1E7E] hover:text-white font-medium hover:bg-[#EF1E7E] w-32 h-12 border-2 border-[#EF1E7E] rounded-sm transition duration-500'>
    Hover Me
</button>

<button className="relative h-12 w-32 origin-top transform border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium before:absolute before:top-0 before:block before:h-0 hover:before:h-full before:w-full hover:before:bg-[#EF1E7E] hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:text-white  before:duration-500">
    Hover Me
</button>

<button type='button' className='relative h-12 w-32 origin-left border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] font-medium hover:text-white before:duration-700 before:absolute before:left-0 before:block before:w-0 hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-[#EF1E7E]  hover:before:top-0 hover:before:-z-10'>
    Hover Me
</button>

<button className='overflow-hidden group relative h-12 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '>
    <span className='bg-[#EF1E7E] absolute w-1/2 -translate-x-full group-hover:translate-x-0 left-0 top-0 bottom-0 duration-500 -z-10 '></span>
    <span className='bg-[#000] absolute w-1/2 translate-x-full group-hover:translate-x-0 right-0 hover:-right-3 top-0 bottom-0 duration-500 -z-10 '></span>
    Hover Me
</button>

<button className='overflow-hidden group relative h-12 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '>
    <span className='bg-[#EF1E7E] absolute h-full -translate-y-full group-hover:translate-y-0 left-0 -top-full right-0 duration-500 -z-10 skew-y-[19deg] py-[33px]'></span>
    <span className='bg-[#000] absolute h-full translate-y-full group-hover:translate-y-0 right-0 left-0 -bottom-full duration-500 -z-10 skew-y-[19deg] py-[33px]'></span>
    Hover Me
</button>

<button className='overflow-hidden group relative h-12 w-32 border-2 border-[#EF1E7E] text-xl text-[#EF1E7E] hover:text-white '>
    <span className='bg-[#EF1E7E] absolute w-2/3 -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-500 -z-10 -skew-x-12'></span>
    <span className='bg-[#EF1E7E] absolute w-1/2 translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-700 -z-10 -skew-x-12'></span>
    Hover Me
</button>

<button className='text-xl font-medium text-white bg-[#EF1E7E] w-32 h-12 rounded-sm shadow-md hover:shadow-lg transform hover:-rotate-3 transition duration-300'>
    Hover Me
</button>

<button className="relative text-xl font-medium text-white bg-[#EF1E7E] w-40 h-12 rounded-sm transition-transform duration-500 transform hover:rotate-180 hover:bg-[#FF4081] shadow-lg">
    Hover Me
</button>

<button className="relative text-xl font-medium text-[#EF1E7E] border-2 border-[#EF1E7E] w-40 h-12 rounded-sm transition-all duration-500 transform hover:rotate-12 hover:bg-[#EF1E7E] hover:text-white hover:border-transparent">
    Hover Me
</button>

<button className="text-xl font-medium text-white bg-[#EF1E7E] w-40 h-12 rounded-sm transition-transform transform hover:scale-110 hover:rotate-6 shadow-lg duration-500">
    Hover Me
</button>

<button className="relative text-xl font-medium text-[#EF1E7E] w-40 h-12 border-2 border-[#EF1E7E] rounded-sm overflow-hidden transition-transform duration-500 transform hover:rotate-90 hover:bg-[#EF1E7E] hover:text-white">
    Hover Me
</button>

<button className="relative text-xl font-medium text-[#EF1E7E] w-40 h-12 border-2 border-[#EF1E7E] rounded-sm overflow-hidden transition-all duration-500 hover:bg-[#EF1E7E] hover:text-white transform hover:rotate-x-180">
    Hover Me
</button>        
        
        `
    }

    return (
        <div>
            <AceEditor
                mode="jsx"
                theme="cobalt" 
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

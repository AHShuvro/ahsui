
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-javascript';


const ButtonCodeContainer = () => {
    const code = {
        a: `
        <button className='text-xl text-white font-medium bg-[#EF1E7E] hover:bg-[#D4156A] px-6 py-2 rounded-sm'>Get Start</button>
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

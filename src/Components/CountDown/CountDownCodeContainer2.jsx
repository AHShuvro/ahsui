
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const CountDownCodeContainer2 = () => {
    const code = {
        a: `
            import { useState, useEffect } from 'react';

            const CountDown = () => {
                const [time, setTime] = useState({ hrs: 23, min: 59, sec: 59 });

                const updateTime = () => {
                    setTime(prevTime => {
                        let { hrs, min, sec } = prevTime;
                        sec--;
                        if (sec < 0) {
                            sec = 59;
                            min--;
                        }
                        if (min < 0) {
                            min = 59;
                            hrs--;
                        }
                        if (hrs < 0) {
                            sec = 59;
                            min = 59;
                            hrs = 23;
                        }
                        return { hrs, min, sec };
                    });
                };

                useEffect(() => {
                    const interval = setInterval(updateTime, 1000);
                    return () => clearInterval(interval);
                }, []);

                return (
                    <div>
                        <p className='text-[#000] font-bold pb-2'>Reverse Count : Reset after 24 hours.</p>

                        <div className={\`flex flex-col items-center gap-2 border border-stone-300 rounded-2xl p-6 mb-8 \${activePreview === "buttonPriview" ? 'block' : 'hidden'}\`}>
                            <p className='text-4xl text-[#777777]'>{time.hrs}:{time.min}:{time.sec}</p>
                        </div>

                    </div>
                );
            };

            export default CountDown;
        
        `
    }

    return (
        <>
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
        </>
    );
};

export default CountDownCodeContainer2;

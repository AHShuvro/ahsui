import { useState, useEffect } from 'react';
import CountDownCodeContainer1 from './CountDownCodeContainer1';

const CountDown = () => {
    const [activePreview, setActivePreview] = useState("buttonPriview");
    const [time, setTime] = useState({ hrs: 0, min: 0, sec: 0 });

    const handlePreview = (preview) => {
        setActivePreview(preview);
    };

    const updateTime = () => {
        setTime(prevTime => {
            let { hrs, min, sec } = prevTime;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hrs++;
            }
            if (hrs === 24) {
                sec = 0;
                min = 0;
                hrs = 0;
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
            <p className='text-[#000] font-bold pb-2'>Carousel with fades.</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex flex-col items-center gap-2 border border-stone-300 rounded-2xl p-6 mb-8 ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
                <p className='text-4xl text-[#777777]'>{time.hrs}:{time.min}:{time.sec}</p>
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <CountDownCodeContainer1 />
            </div>
        </div>
    );
};

export default CountDown;

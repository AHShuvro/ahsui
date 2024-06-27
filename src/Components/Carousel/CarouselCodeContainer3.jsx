
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const CarouselCodeContainer3 = () => {
    const code = {
        a: `
        
        import { useState, useRef } from "react";

export const Carousel3 = () => {

    const hoverStyle = {
        cursor: \`url(https://i.ibb.co/n754Ssx/icon-move-black.png) 16 16, auto\`,
            backgroundColor: '#FFFFFF'
    };

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        { img: "https://i.ibb.co/Zm6CqNz/wp6304582-werewolf-minimalist-wallpapers.png", name: "Bryan Jhonson", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
        { img: "https://i.ibb.co/gZGmYGV/pexels-miguel-padri-n-3785935.jpg", name: "Jeremy Dupont", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
        { img: "https://i.ibb.co/g6z8pH7/mildly-useful-J433-OFf-Il-PQ-unsplash.jpg", name: "Gustav Fring", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
    ];

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const moveX = e.clientX - startX;
        if (moveX > 50) {
            setCurrentSlider(currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
            setIsDragging(false);
        } else if (moveX < -50) {
            setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
            setIsDragging(false);
        }
    };

    return (

        <div>

            <div className={\`flex justify-center mb-8 overflow-hidden relative h-60 sm:h-[24rem] md:h-[34rem] select-none \`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                ref={sliderRef}
                style={hoverStyle}>
                <>
                    <img className="h-full w-full" src={sliders[currentSlider].img} alt="" />
                    <div className='absolute bg-black opacity-20 w-full h-full'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <p className=' text-5xl text-white'>Carousel with Drag.</p>
                    </div>
                </>
            </div>
        </div>
    );
};


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

export default CarouselCodeContainer3;

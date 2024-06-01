
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const CarouselCodeContainer2 = () => {
    const code = {
        a: `
        
        import { useCallback, useEffect, useState } from 'react';
        import CarouselCodeContainer from './CarouselCodeContainer';
        
        const Carousel2 = () => {
            const [activePreview, setActivePreview] = useState("buttonPriview");
        
            const handlePreview = (e) => {
                setActivePreview(e);
            };
        
            const [currentSlide, setCurrentSlide] = useState(0);
        
            const carouselImages = [
                'https://source.unsplash.com/1200x540/?hill',
                'https://source.unsplash.com/1200x540/?sea',
                'https://source.unsplash.com/1200x540/?waterfall',
                'https://source.unsplash.com/1200x540/?smook'
            ];
        
            const prevSlider = () => setCurrentSlide((currentSlide) => currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1);
            const nextSlider = useCallback(() => setCurrentSlide((currentSlide) => currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1), [carouselImages.length]);
        
            useEffect(() => {
                const interval = setInterval(() => {
                    nextSlider();
                }, 4000);
                return () => clearInterval(interval);
            }, [nextSlider]);
        
            return (
                <div>
                    <div className={\`flex justify-center mb-8 overflow-hidden relative h-60 sm:h-[24rem] md:h-[34rem] \${activePreview === "buttonPriview" ? 'block' : 'hidden'}\`}>
                        {
                            carouselImages.map((slide, idx) => (
                                <img className={\`absolute top-0 left-0 w-full min-w-full h-60sm:h-[24rem] md:h-[34rem] object-cover  \${idx === currentSlide ? 'opacity-100' : 'opacity-0'}\`} key={idx} src={slide} alt="" style={{ transition: 'opacity 2000ms ease-in-out'}}
                        />
                            ))
                        }
                    </div>
                </div>
            );
        };
        
        export default Carousel2;
        
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

export default CarouselCodeContainer2;

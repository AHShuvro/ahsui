
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const CarouselCodeContainer = () => {
    const code = {
        a: `
        
            import { useCallback, useEffect, useState } from 'react';

            const Carousel1 = () => {

                const [currentSlide, setCurrentSlide] = useState(0)

                const carouselImages = [
                    'https://source.unsplash.com/1200x540/?moon', 
                    'https://source.unsplash.com/1200x540/?bird', 
                    'https://source.unsplash.com/1200x540/?river', 
                    'https://source.unsplash.com/1200x540/?rain'
                ];

                const nextSlider = useCallback(() => setCurrentSlide((currentSlide) => currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1), [carouselImages.length]);

                useEffect(() => {
                    const interval = setInterval(() => {
                        nextSlider();
                    }, 2500);
                    return () => clearInterval(interval);
                }, [nextSlider]);


                return (
                    <>
                        <div className={\`flex justify- center mb-8 overflow - hidden' } \`}>
                            <div className=" ease-linear duration-700 flex transform-gpu" style={{ transform: \`translateX(-\${ currentSlide * 100} %)\` }}>
                                {
                                    carouselImages.map((slide, idx) => (
                                        <img className=' object-cover bg-gray-200 min-w-full h-60sm:h-[24rem] md:h-[34rem]' key={idx} src={slide} alt="" />
                                    ))
                                }
                            </div>
                        </div>
                    </>
                );
            };

            export default Carousel1;
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

export default CarouselCodeContainer;


import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-javascript';


const CarouselCodeContainer = () => {
    const code = {
        a: `
        
            import { useCallback, useEffect, useState } from 'react';

            const Carousel1 = () => {

                const [currentSlide, setCurrentSlide] = useState(0)

                const carouselImages = ['https://source.unsplash.com/1200x540/?moon', 'https://source.unsplash.com/1200x540/?bird', 'https://source.unsplash.com/1200x540/?river', 'https://source.unsplash.com/1200x540/?rain'];

                const nextSlider = useCallback(() => setCurrentSlide((currentSlide) => currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1), [carouselImages.length]);

                useEffect(() => {
                    const intervalId = setInterval(() => {
                        nextSlider();
                    }, 3000);
                    return () => clearInterval(intervalId);
                }, [nextSlider]);


                return (
                    <>
                        <div className={\`flex justify- center mb-8 overflow - hidden' } \`}>
                            <div className=" ease-linear duration-500 flex transform-gpu" style={{ transform: \`translateX(-\${ currentSlide * 100} %)\` }}>
                                {
                                    carouselImages.map((slide, idx) => (
                                        <img key={idx} src={slide} alt="" />
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

export default CarouselCodeContainer;

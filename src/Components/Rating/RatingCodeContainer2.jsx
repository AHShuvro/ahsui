
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-cobalt';


const RatingCodeContainer2 = () => {
    const code = {
        a: `

        import { useState } from "react";
        import { CiStar } from "react-icons/ci";
        
        const Rating = () => {
        
            const [rating, setRating] = useState(2)
            const [hover, setHover] = useState(null)
        
            return (
                <>
                    <div className={\`flex flex-col gap-2 border border-stone-300 rounded-2xl p-6 mb-8\`}>
                        <div className="flex">
                            {
                                [...Array(5)].map((star, index) => {
                                    const currentRating = index + 1;
                                    return (
                                        <label key={index} htmlFor="">
                                            <input
                                                className="hidden"
                                                type="radio"
                                                name="rating"
                                                value={currentRating}
                                                onClick={() => setRating(currentRating)} />
                                            <CiStar
                                                className="cursor-pointer"
                                                size={50}
                                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(currentRating)}
                                            />
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            );
        };
        
        export default Rating;
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

export default RatingCodeContainer2;

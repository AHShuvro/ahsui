
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import RatingCodeContainer from "./RatingCodeContainer";

const Rating1 = () => {

    const [activePreview, setActivePreview] = useState("buttonPriview");

    const handlePreview = (e) => {
        setActivePreview(e);
    };



    const [rating, setRating] = useState(2)
    const [hover, setHover] = useState(null)
    return (
        <>
            <p className='text-[#000] font-bold pb-2'>Rating with onClick</p>

            <div className='flex gap-4 p-2'>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonPriview")}>Preview</p>
                <p className='cursor-pointer px-2 py-1 hover:text-white focus:text-white bg-[#ef1e7f1a] hover:bg-[#EF1E7E] focus:bg-[#EF1E7E] rounded-md' tabIndex="0" onClick={() => handlePreview("buttonJsx1")}>React</p>
            </div>

            <div className={`flex flex-col items-center gap-2 border border-stone-300 rounded-2xl p-6 mb-8 ${activePreview === "buttonPriview" ? 'block' : 'hidden'}`}>
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
                                        onMouseDown={() => setHover(currentRating)}
                                    />
                                </label>
                            )
                        })
                    }
                </div>
            </div>

            <div className={`${activePreview === "buttonJsx1" ? 'block' : 'hidden'}`}>
                <RatingCodeContainer />
            </div>
        </>
    );
};

export default Rating1;
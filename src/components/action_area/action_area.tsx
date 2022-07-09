import { useState } from "react";
import "./action_area.less"

import sqrImage from "./black_square.png"

const ActionArea = (props:any) =>
{   
    const [currentLetter, setCurrentLetter] = useState("");
    const {letter, setLetter} = props;

    const showLetter = () =>
    {
        if (currentLetter === "")
            setCurrentLetter(letter);
        else
        {
            setCurrentLetter("");
            setLetter("");
        } 
    }

    return (
        <div className="action">
           <div className="click_here">click here</div> 
           <img onClick={showLetter}
           src={sqrImage} alt="black square" className="black_square"></img>
           <div className="your_symbol">{currentLetter}</div>
        </div>
    )
}

export default ActionArea;
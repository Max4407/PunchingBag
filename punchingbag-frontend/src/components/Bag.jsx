import React, { useState } from 'react'
import '../css/Bag.css'
import idle from '../assets/Stage 0 Idle.png'
import impact from '../assets/Impact Frame.png'
import Stage1 from '../assets/Stage 1.png'
import Stage2 from '../assets/Stage 2.png'
import Stage3 from '../assets/Stage 3.png'
import Stage4 from '../assets/Stage 4.png'
import Dead from '../assets/Stage 5 Dead.png'
import Hover0 from '../assets/Stage 0 Hover.png'
import Hover1 from '../assets/Stage 1 Hover.png'
import Hover2 from '../assets/Stage 2 Hover.png'
import Hover3 from '../assets/Stage 3 Hover.png'
import Hover4 from '../assets/Stage 4 Hover.png'

const Bag = () => {
    const [useCustomCursor, toggleCustomCursor] = useState(false);
    const [imgSrc, setImgSrc] = useState(idle)
    const [counter, setCounter] = useState(1)
    const [stage, setStage] = useState(0)

	const handleClick = () => {
        setCounter(counter + 1);
        setImgSrc(impact);
        if (counter >= 4) {
            setCounter(0);
            setStage(stage + 1);
        }
        setTimeout(() => {
            hoverImage();
        }, 500);
    }

    const updateImage = () => {
        switch (stage) {
            case 0: setImgSrc(idle); break;
            case 1: setImgSrc(Stage1); break;
            case 2: setImgSrc(Stage2); break;
            case 3: setImgSrc(Stage3); break;
            case 4: setImgSrc(Stage4); break;
            case 5: setImgSrc(Dead); break;
            default: setImgSrc(Dead); break; 
        }
    }

    const hoverImage = () => {
        switch (stage) {
            case 0: setImgSrc(Hover0); break;
            case 1: setImgSrc(Hover1); break;
            case 2: setImgSrc(Stage2); break;
            case 3: setImgSrc(Stage3); break;
            case 4: setImgSrc(Stage4); break;
            case 5: setImgSrc(Dead); break;
            default: setImgSrc(Dead); break; 
        }
    }

	return (
		<div>
			<div className="preview">
				<img
					src={imgSrc}
					alt="punching bag"
					onClick={handleClick}
                    onMouseEnter = {() => hoverImage()}
                    onMouseLeave = {() => updateImage()}
					role="button"
					style={{width: "350px"}}
				/>
			</div>
		</div>
	)
}

export default Bag


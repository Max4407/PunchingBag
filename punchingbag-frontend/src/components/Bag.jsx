import React, { useState } from 'react'
import '../css/Bag.css'
import idle from '../assets/Stage 0 Idle.png'
import impact from '../assets/Impact Frame.png'
import Stage1 from '../assets/Stage 1.png'
import Stage2 from '../assets/Stage 2.png'
import Stage3 from '../assets/Stage 3.png'
import Stage4 from '../assets/Stage 4.png'
import Dead from '../assets/Stage 5 Dead.png'
//import Cursor from '../assets/Boxing_Glove_Cursor.png'

const Bag = () => {
	// clicked state toggles an alternate visual; hover is handled by CSS
	const [imgSrc, setImgSrc] = useState(idle)
    const [counter, setCounter] = useState(1);
    const [stage, setStage] = useState(0);

	const handleClick = () => {
        setCounter(counter + 1);
        setImgSrc(impact);
        if (counter >= 4) {
            setCounter(0);
            setStage(stage + 1);
        }
        setTimeout(() => {
                switch (stage) {
                    case 0: setImgSrc(idle); break;
                    case 1: setImgSrc(Stage1); break;
                    case 2: setImgSrc(Stage2); break;
                    case 3: setImgSrc(Stage3); break;
                    case 4: setImgSrc(Stage4); break;
                    case 5: setImgSrc(Dead); break;
                    default: setImgSrc(Dead); break; 
                }
        }, 500);
    }

    const onMouseEnter = () => {
        //style={{ cursor: `url(${cursor}), auto`, height: "100vh" }}
    }

	return (
		<div className="bag-container">
			<h2>Punching Bag</h2>
			<div className="preview">
				<img
					src={imgSrc}
					alt="Lebron"
					onClick={handleClick}
                    //onMouseEnter = {}
                    //onMouseLeave = {}
					role="button"
					style={{ cursor: 'pointer', width: "200px"}}
				/>
			</div>
		</div>
	)
}

export default Bag


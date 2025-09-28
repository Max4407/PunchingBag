import React, { useState } from 'react'
import '../css/Bag.css'
import Lebron from '../assets/lebron.png'
import scared from '../assets/scared.png'
import Stage1 from '../assets/stage1.png'
import Stage2 from '../assets/stage2.png'
import Stage3 from '../assets/stage3.png'
import Stage4 from '../assets/stage4.png'
import Crying from '../assets/crying.png'

const Bag = ({ counter, setCounter, totalHits, setTotalHits }) => {
	// clicked state toggles an alternate visual; hover is handled by CSS
	const [imgSrc, setImgSrc] = useState(Lebron)
	const [stage, setStage] = useState(1);

	const handleClick = () => {
		setCounter(counter + 1);
		setTotalHits(totalHits + 1);
		if (counter >= 5) {
			setCounter(0);
			setStage(stage + 1);
			switch (stage) {
				case 1: setImgSrc(Stage1); break;
				case 2: setImgSrc(Stage2); break;
				case 3: setImgSrc(Stage3); break;
				case 4: setImgSrc(Stage4); break;
				case 5: setImgSrc(scared); break;
				case 6: setImgSrc(Crying); break;
			}
		}
	}

	return (
		<div className="bag-container">
			<h2>Punching Bag</h2>
			<h3>Counter: {counter}</h3>
			<div className="preview">
				<img
					src={imgSrc}
					alt="Lebron"
					onClick={handleClick}
					role="button"
					style={{ cursor: 'pointer', width: "200px"}}
				/>
			</div>
		</div>
	)
}

export default Bag


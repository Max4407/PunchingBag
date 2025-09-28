import React, { useState } from 'react';
import '../css/graph.css';

function StressTracker() {
	const [rating, setRating] = useState(8);

	// Calculate bar fill percentage (1 = 10%, 10 = 100%)
	const fillPercentage = (rating / 10) * 100;

	// Get color based on stress level
	const getStressColor = (level) => {
		if (level <= 3) return '#4ade80'; // Green (calm)
		if (level <= 6) return '#fbbf24'; // Yellow (medium)
		return '#ef4444'; // Red (stressed)
	};

	const barColor = getStressColor(rating);

	return (
		<div className="stress-graph-container">
			{/* Stress Level Display */}
			<div className="stress-level-display">
				Stress: {rating}/10
			</div>

			{/* Stress Bar */}
			<div className="stress-bar-section">
				<div className="stress-bar-container">
					{/* Fill bar */}
					<div 
						className="stress-bar-fill"
						style={{
							width: `${fillPercentage}%`,
							backgroundColor: barColor
						}}
					></div>
					
					{/* Scale markers */}
					{[...Array(9)].map((_, i) => (
						<div 
							key={i} 
							className="stress-bar-marker"
							style={{ left: `${((i + 1) * 10)}%` }}
						></div>
					))}
				</div>

				{/* Scale numbers */}
				<div className="stress-bar-scale">
					{[...Array(11)].map((_, i) => (
						<span key={i} className="stress-scale-number">
							{i}
						</span>
					))}
				</div>
			</div>

			{/* Question and Rating Buttons */}
			<div className="graph-question-block">
				<div className="graph-question">
					How are you?
				</div>
				
				<div className="graph-rating-row">
					{[...Array(10)].map((_, i) => (
						<button
							key={i}
							className={`graph-rating-btn ${rating === i+1 ? 'selected' : ''}`}
							onClick={() => setRating(i+1)}
						>
							{i+1}
						</button>
					))}
				</div>
				
				<div className="graph-rating-emojis">
					<span className="graph-emoji-left" role="img" aria-label="smile">😊</span>
					<span className="graph-emoji-right" role="img" aria-label="sad">😢</span>
				</div>
			</div>
		</div>
	);
}

export default StressTracker;
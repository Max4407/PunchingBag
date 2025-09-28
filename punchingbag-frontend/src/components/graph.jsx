import React, { useState } from 'react';
import '../css/graph.css';

function StressTracker() {
	const [ratings, setRatings] = useState([]);
	const maxBars = 6; // Maximum bars to show before removing the top one

	// Get color based on stress level
	const getStressColor = (level) => {
		if (level === 0) return 'transparent'; // No color for 0
		if (level <= 3) return '#4ade80'; // Green (calm)
		if (level <= 6) return '#fbbf24'; // Yellow (medium)
		return '#ef4444'; // Red (stressed)
	};

	return (
		<div className="stress-graph-container">
			{/* Multiple Stress Bars (limit to maxBars) */}
			<div style={{marginBottom: 32}}>
				{(ratings.slice(-maxBars)).map((rating, idx) => {
					const fillPercentage = (rating / 10) * 100;
					const barColor = getStressColor(rating);
					return (
						<div className="stress-bar-section" key={idx + ratings.length - Math.min(ratings.length, maxBars)}>
							<div className="stress-bar-container">
								<div 
									className="stress-bar-fill"
									style={{
										width: `${fillPercentage}%`,
										backgroundColor: barColor
									}}
								></div>
								{[...Array(9)].map((_, i) => (
									<div 
										key={i} 
										className="stress-bar-marker"
										style={{ left: `${((i + 1) * 10)}%` }}
									></div>
								))}
							</div>
						</div>
					);
				})}
			</div>

			{/* Input block below bars */}
			<div style={{textAlign: 'center'}}>
				<div className="graph-question" style={{marginBottom: 8}}>How are you?</div>
				<div className="graph-rating-row" style={{marginBottom: 8}}>
					{[...Array(10)].map((_, i) => (
						<button
							key={i}
							className={`graph-rating-btn`}
							onClick={() => {
								setRatings(prev => {
									const updated = [...prev, i+1];
									return updated.length > maxBars ? updated.slice(-maxBars) : updated;
								});
							}}
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
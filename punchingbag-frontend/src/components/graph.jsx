import React, { useState } from 'react';
import '../css/graph.css';



// Helper to generate stress data based on user rating and hit count
function generateStressData(rating, hits) {
	// rating: 1 (happy) to 10 (very stressed)
	// hits: number of hits
	// We'll simulate a curve: higher rating = lower stress, more hits = lower stress
	// Stress goes from 1.0 (very stressed) to 0.2 (happy)
	const minStress = 0.2;
	const maxStress = 1.0;
	const stressFromRating = maxStress - ((rating - 1) / 9) * (maxStress - minStress);
	// Simulate stress decreasing with hits
	const data = [];
	for (let i = 0; i <= hits; i++) {
		// Each hit reduces stress a bit
		const stress = Math.max(minStress, stressFromRating - (i / Math.max(1, hits)) * (stressFromRating - minStress));
		data.push({ hits: i, stress });
	}
	return data;
}


function StressTracker({ hits = 5 }) {
	// State for user input
	const [rating, setRating] = useState(5); // default: neutral

	// Generate data based on user input and hits from props
	const data = generateStressData(rating, hits);

	// SVG graph dimensions
	const width = 300;
	const height = 200;
	const padding = 24;

	// Map data to SVG coordinates
	const maxHits = Math.max(...data.map(d => d.hits));
	// y: 0 (bottom) = happy, y: 1 (top) = very stressed
	const points = data.map(d => {
		const x = padding + (d.hits / Math.max(1, maxHits)) * (width - 2 * padding);
		const y = padding + (1 - d.stress) * (height - 2 * padding);
		return `${x},${y}`;
	}).join(' ');

		return (
			<div className="stress-graph-container">
				<div className="graph-hit-count">Hits: {hits}</div>
				<svg width={width} height={height}>
				{/* Axes - solid black */}
				<line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#000" strokeWidth="2" />
				<line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#000" strokeWidth="2" />
				{/* Line graph only, no points */}
				<polyline
					fill="none"
					stroke="#62f31eff"
					strokeWidth="2"
					points={points}
				/>
				{/* Labels */}
				<text x={width/2} y={padding-6} textAnchor="middle" fontSize="18" fill="#333">Stress Level</text>
				<text x={width - padding} y={height - padding + 18} textAnchor="end" fontSize="15" fill="#333">Hits</text>
			</svg>
			<div className="graph-question-block">
				<div className="graph-question">How are you?</div>
				<div className="graph-rating-row">
					{[...Array(10)].map((_, i) => (
						<button
							key={i}
							className="graph-rating-btn"
							style={rating === i+1 ? {background: '#ffd6d6', borderColor: '#ff2d2d'} : {}}
							onClick={() => setRating(i+1)}
						>{i+1}</button>
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
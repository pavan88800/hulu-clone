import React, { useState, useEffect } from 'react';
import './results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './request';
import FlipMove from 'react-flip-move';
const Results = ({ selectedOption }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(selectedOption);
			console.log(request.data.results);
			setMovies(request.data.results);
		}
		fetchData();
	}, [selectedOption]);

	return (
		<div className="results">
			<FlipMove>
				{movies.map((moive) => {
					return <VideoCard key={moive.id} movie={moive} />;
				})}
			</FlipMove>
		</div>
	);
};

export default Results;

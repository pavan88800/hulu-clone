import React from 'react';
import './nav.css';
import requests from './request';
const Nav = ({ setSelectedOption }) => {
	return (
		<div className="nav">
			<h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchComedyMovie)}>Comedy</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchHorrorMovie)}>Horror</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystrey</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchWestren)}>Western</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchTv)}>Movie</h2>
		</div>
	);
};

export default Nav;

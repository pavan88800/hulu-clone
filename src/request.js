const API_KEY = '0d11d64fbcc173240e6e5ce8c877eb7a';

export default {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	fetchWestren: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

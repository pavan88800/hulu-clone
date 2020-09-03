import React, { forwardRef } from 'react';
import './videocard.css';
import TextTruncate from 'react-text-truncate'; // recommend
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const VideoCard = forwardRef(({ movie }, ref) => {
	const base__url = 'https://image.tmdb.org/t/p/original/';
	return (
		<div ref={ref} className="videoCard">
			<img src={`${base__url}${movie.backdrop_path || movie.poster_path}`} alt="moive alternate" />
			<TextTruncate line={1} element="p" truncateText="…" text={movie.overview} />

			<h2>{movie.title || movie.orginal_name}</h2>
			<p className="videoCard__stats">
				{movie.media_type && `${movie.media_type} .`}
				{movie.release_date || movie.first_air_date} {' . '} <ThumbUpIcon />
				{movie.vote_count}
			</p>
		</div>
	);
});

export default VideoCard;

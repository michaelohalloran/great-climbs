import React from "react";
import "./Video.scss";
import video from "../downloads/alps.mp4";

const Video = () => {
	return (
		<div className="video-container">
			<div className="bg-video">
				<video autoPlay muted loop>
					<source src={video} type="video/mp4" />
					<source src={video} type="video/webm" />
				</video>
			</div>

			<div className="video-text-container">
				<h1>Sky Climbs</h1>
				<h3>Do you have what it takes</h3>
				<h3>to conquer the steepest climbs in the world?</h3>
				<br />
				<h6>Climb with us</h6>
			</div>
		</div>
	);
};

export default Video;

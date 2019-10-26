import React from "react";
import "./Video.scss";

const Video = () => {
	return (
		<div className="video-container">
			<div className="bg-video">
				<video autoPlay muted loop>
					<source
						src="https://gcs-vimeo.akamaized.net/exp=1572090231~acl=%2A%2F967969527.mp4%2A~hmac=e39867b6f932eeca5f678a7ac66d96d0f5122c7cc8bb6a17fb04f91ebeccfb6d/vimeo-prod-skyfire-std-us/01/2513/10/262569972/967969527.mp4"
						type="video/mp4"
					/>
					<source
						src="https://gcs-vimeo.akamaized.net/exp=1572090231~acl=%2A%2F967969527.mp4%2A~hmac=e39867b6f932eeca5f678a7ac66d96d0f5122c7cc8bb6a17fb04f91ebeccfb6d/vimeo-prod-skyfire-std-us/01/2513/10/262569972/967969527.mp4"
						type="video/webm"
					/>
				</video>
			</div>

			{/* https://pixabay.com/videos/landscape-clouds-mountains-sun-1824/ */}

			{/* https://www.shutterstock.com/video/clip-33810145-young-fit-man-cycling-on-road-bike */}
			{/* https://www.shutterstock.com/video/clip-4962182-vrhnika---aug-24-tracking-cyclist-through */}
			{/* https://www.shutterstock.com/video/clip-12748844-4k-pov-road-cyclist-on-asphalt-mountain */}
			{/* https://www.shutterstock.com/video/clip-14891089-medium-cropped-shot-unrecognizable-cyclist-silhouette-riding */}
			{/* https://www.shutterstock.com/video/clip-1029829778-slow-motion-sun-flare-close-up-happy */}
			{/* https://www.shutterstock.com/video/clip-7298125-steadicam-shot-two-healthy-men-peddling-fast */}
			{/* https://www.shutterstock.com/video/clip-1030724480-hard-training-cyclist-on-road-bicycle-riding */}
			{/* https://www.shutterstock.com/video/clip-31722385-tracking-shot-group-cyclists-on-country-road */}
			{/* https://www.shutterstock.com/video/clip-5690930-healthy-man-cycling-road-bicycle-outdoors-fitness */}
			{/* https://www.shutterstock.com/video/clip-1022950609-road-biking-cyclist-man-training-on-bike */}
			{/* https://www.shutterstock.com/video/clip-1028288936-cyclist-riding-on-road-bike-city-park */}
			{/* https://www.shutterstock.com/video/clip-1020754192-aerial-cyclist-ride-on-rural-road-training */}
			{/* https://www.shutterstock.com/video/clip-1011522929-slow-motion-video-shot-professional-male-cyclist */}
			{/* https://www.shutterstock.com/video/clip-1012337981-4k-aerial-drone-footage---sangre-de */}
			{/* https://ak5.picdn.net/shutterstock/videos/1035348305/preview/stock-footage-mont-ventoux-aerial-hyperlapse-sunset-vaucluse-tour-de-france-cycling-race.webm" */}
			{/* <source src="https://storage.coverr.co/videos/coverr-mountains--1570960683451?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTcyMDc0MjkxfQ.ZQLIZ1uEZ7urhJuIZj6JkpeWJkTnKusX7u0THLf0KEY" /> */}

			<div className="video-text-container">
				<h1>The Great Climbs</h1>
				<h3>Do you have what it takes?</h3>
				<h3>to conquer the steepest climbs in the world?</h3>
				<br />
				<h6>Climb with us</h6>
			</div>
		</div>
	);
};

export default Video;

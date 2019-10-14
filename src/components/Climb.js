import React from "react";
import "./Climb.scss";

const Climb = (props) => {
	console.log("climb props:", props);
	const style = {
		backgroundImage: `url("${props.climb.img}"`
	};
	console.log("style: ", style);

	return (
		<div className="climb-container" style={style}>
			{/* <img src={props.climb.img} alt={props.climb.name} /> */}
			{/* INCLUDE CLIMB INFO PROP BOX HERE (HOVER or MODAl?) */}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis a porro odit aliquid fugit quos
				necessitatibus, impedit voluptatem alias voluptate molestias quae. Soluta commodi vitae aliquid eum
				animi, dolorem veritatis.
			</p>
		</div>
	);
};

export default Climb;

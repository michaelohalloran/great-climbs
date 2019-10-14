import React from "react";
import "./Item.scss";
import { withRouter, Link } from "react-router-dom";

const Item = ({ img, name, linkUrl }) => {
	// const openModal = (e) => {
	// 	console.log(e);
	// };

	// console.log(props);

	return (
		<div className="homepage-item">
			<img src={img} alt={name} />
			{/* <button onClick={openModal} className="homepage-btn">
				{name}
			</button> */}
			<Link to={`/climb/${linkUrl}`} className="homepage-btn">
				{name}
			</Link>
		</div>
	);
};

export default withRouter(Item);

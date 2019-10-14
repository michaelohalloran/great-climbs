import React from "react";
import "./Item.scss";

const Item = ({ name, img }) => {
	const openModal = (e) => {
		console.log(e);
	};

	return (
		<div className="homepage-item">
			<img src={img} alt={name} />
			<button onClick={openModal} className="homepage-btn">
				{name}
			</button>
		</div>
	);
};

export default Item;

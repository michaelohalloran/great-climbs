import React from "react";
import Item from "./Item.js";
import "./ClimbList.scss";

const ClimbList = ({ climbs }) => {
	const climbItems = climbs.map((climb) => {
		return <Item key={climb.id} {...climb} />;
	});

	return <div className="climb-list-container">{climbItems}</div>;
};

export default ClimbList;

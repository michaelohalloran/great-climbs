import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, style, classNames }) => {
	return (
		<button style={style} onClick={() => (onClick ? onClick() : null)} className={`custom-button ${classNames}`}>
			{text || "Click"}
		</button>
	);
};

export default Button;

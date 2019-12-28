import React, { useState } from "react";
import "./Modal.scss";
import Button from "./Button";

const Modal = ({ handleClick }) => {
	return (
		<div className="modal">
			Modal
			<span className="close-span" onClick={handleClick}>
				&times;
			</span>
			<Button classNames="modal-close-btn" onClick={handleClick} />
		</div>
	);
};

export default Modal;

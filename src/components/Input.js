import React, { Component } from "react";
import "./Input.scss";

const Input = ({ type, name, onChange, placeholder }) => {
	return <input type={type} name={name} onChange={onChange} placeholder={placeholder} />;
};

export default Input;

import React from "react";
import Signin from "./Signin";
import "./Auth.scss";

const Auth = () => {
	return (
		<div className="auth-container">
			<Signin btnText={"Sign in"} />
			<Signin btnText={"Sign up"} isSignup={true} />
		</div>
	);
};

export default Auth;

import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Climb from "./components/Climb";
import { Route, Switch } from "react-router-dom";
import seedItems from "./components/seedItems";

function App() {
	const findClimb = (climbName) => {
		return seedItems.find((climb) => climb.linkUrl === climbName);
	};

	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route
					exact
					path="/climb/:climbName"
					render={(routeProps) => (
						<Climb {...routeProps} climb={findClimb(routeProps.match.params.climbName)} />
					)}
				/>
				{/* https://github.com/michaelohalloran/react-color-picker/blob/master/src/Palette/App.js */}
			</Switch>
		</div>
	);
}

export default App;

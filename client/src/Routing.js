import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen/LandingScreen";
import LoginScreen from "./pages/LogIn/index";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index";

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/" component={LandingScreen}>
				<LandingScreen />
			</Route>
			<Route exact path="/login" component={LoginScreen}>
				<LoginScreen />
			</Route>
			<Route exact path="/browse" component={Home}>
				<Home />
			</Route>
			<Route component={NotFound} />
		</Switch>
	);
};

export default Routing;

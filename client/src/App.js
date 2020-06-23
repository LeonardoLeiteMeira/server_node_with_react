import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Teste";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Test />

				<div className="linkNavBar">
					<Link to="/">Home Page </Link>
				</div>

				<div className="linkNavBar">
					<Link to="/About"> About </Link>
				</div>

				<div className="linkNavBar">
					<Link to="/Contact"> Contact </Link>
				</div>

				<main id="main">
					<Switch>
						<Route path="/About" component={AboutPage} />
						<Route path="/Contact" component={ContactPage} />
						<Route path="/" component={HomePage} />
					</Switch>
				</main>
			</header>
		</div>
	);
}

export default App;

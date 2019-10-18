import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary m-2">Check the Context in action</button>
					</Link>
					<Link to="/hotsauce">
						<button className="btn btn-warning m-2">Hotsauce List</button>
					</Link>
					<Link to="/yo_yo">
						<button className="btn btn-secondary m-2">yoyoyo</button>
					</Link>
				</div>
			</nav>
		);
	}
}

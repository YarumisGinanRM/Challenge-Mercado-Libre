import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning">
			<div className="container-fluid mx-5">
				<h3 className="navbar-brand fs-2">LOGO</h3>
				<form className="d-flex col-xs-8 col-md-10 col-lg-11">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};

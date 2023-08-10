import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-light bg-warning">
			<div class="container-fluid mx-5">
				<h3 class="navbar-brand fs-2">LOGO</h3>
				<form class="d-flex col-11">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};

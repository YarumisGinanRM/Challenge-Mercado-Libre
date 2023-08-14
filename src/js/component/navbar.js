import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const [busqueda, setBusqueda] = useState("");
	const handleChange =(e) => {
		setBusqueda(e.target.value)
		console.log("Busqueda: " + e.target.value);
	}


	// const filtrar = (elemetoBuscado) => {
	// 	let resultadoBusqueda = productos.filter((elementoEncontrado) => {
	// 		if(productos.title.toLowerCase().includes(elemetoBuscado.toLowerCase())){
	// 		return elementoEncontrado
	// 	}})
	// }

	
	return (
		<nav className="navbar navbar-light bg-warning">
			<div className="container-fluid mx-5">
				<h3 className="navbar-brand fs-2">LOGO</h3>
				<form className="d-flex col-sm-8 col-md-10 col-lg-10">
					<input className="form-control" type="search" placeholder="Search" aria-label="Search" value={busqueda} onChange={handleChange}/>
					<button className="btn btn-outline-success" onClick={(e) => {e.preventDefault();actions.getBusqueda(busqueda)}}><i class="fa-solid fa-magnifying-glass"></i></button>
				</form>
			</div>
		</nav>
	);
};

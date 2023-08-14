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
				<Link to={"/"} className="text-decoration-none text-dark">
					<h3 className="navbar-brand fs-2">LOGO</h3>
				</Link>
				<div className="d-flex bg-white col-sm-8 col-md-10 col-lg-10">
					<input className="form-control bg-white border-0" placeholder="Buscar productos..." aria-label="Search" value={busqueda} onChange={handleChange}/>
					<button className="btn bg-light border-1" onClick={(e) => {e.preventDefault();actions.getBusqueda(busqueda)}}><i class="fa-solid fa-magnifying-glass"></i></button>
				</div>
			</div>
		</nav>
	);
};

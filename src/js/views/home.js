import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardProducts } from "../component/cardProducts.js";

export const Home = () => (
	<div className="d-flex align-items-center flex-column m-5 mt-3">
		<h3>Resultado de la busqueda</h3>
		<CardProducts/>
		<CardProducts/>
		<CardProducts/>
		<CardProducts/>
	</div>
);

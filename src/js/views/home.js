import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardProducts } from "../component/cardProducts.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getProductos();
	}, []);

	return (
		<div className="d-flex align-items-center flex-column m-5 mt-3">
			<h3>Resultado de la busqueda</h3>
			{store.productos.map((item, index) => (
				<CardProducts item={item} key={index} />
			))}
			{/* <CardProducts />
			<CardProducts />
			<CardProducts />
			<CardProducts /> */}
		</div>
	)
};

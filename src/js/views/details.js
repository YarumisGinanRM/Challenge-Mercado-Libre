import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails";
import { useParams } from "react-router";

export const DetailsProducts = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [producto, setProducto] = useState(null);
    const [description, setDescription] = useState(null);
    const [categoria, setCategoria] = useState(null)

    const actualizarProducto = async () => {
        let idproducto = await actions.getDetailsProduct(params.id);
        obtenerCategoria(idproducto.category_id)
        setProducto(idproducto);
    }

    const actualizarDescription = async () => {
        let descriptionProducto = await actions.getDescriptionProduct(params.id);
        setDescription(descriptionProducto);
    }

    const obtenerCategoria = async (idCategoria) => {
        let categoriaProducto = await actions.getCategory(idCategoria);
        console.log(categoriaProducto)
        setCategoria(categoriaProducto);
    }

    useEffect(() => {
        // console.log(params.id)
        actualizarProducto();
        actualizarDescription();
    }, []);

    return(
        <div className="d-flex justify-content-center m-5 mt-3">
            {producto  && <CardDetails  producto ={producto} description = {description} categoria={categoria}/>}
        </div>
    )
}
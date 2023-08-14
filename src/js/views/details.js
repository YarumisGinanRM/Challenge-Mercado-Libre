import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails";
import { useParams } from "react-router";

export const DetailsProducts = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [producto, setProducto] = useState(null);
    const [description, setDescription] = useState(null);

    const actualizarProducto = async () => {
        let idproducto = await actions.getDetailsProduct(params.id);
        actions.getCategory(idproducto.category_id)
        setProducto(idproducto);
    }
    

    const actualizarDescription = async () => {
        let descriptionProducto = await actions.getDescriptionProduct(params.id);
        setDescription(descriptionProducto);
    }

    useEffect(() => {
        // console.log(params.id)
        actualizarProducto();
        actualizarDescription();
    }, []);

    return(
        <div className="d-flex justify-content-center m-5 mt-3">
            {producto  && <CardDetails  producto ={producto} description = {description}/>}
        </div>
    )
}
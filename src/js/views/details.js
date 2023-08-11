import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails";
import { useParams } from "react-router";

export const DetailsProducts = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [producto, setProducto] = useState({});

    const actualizarProducto = async () => {
        let idproducto = await actions.getDetailsProduct(params.uid);
        setProducto(idproducto);
    }

    useEffect(() => {
        actualizarProducto();
    }, []);

    return(
        <div className="d-flex justify-content-center m-5 mt-3">
            <CardDetails  producto ={producto}/>
        </div>
    )
}
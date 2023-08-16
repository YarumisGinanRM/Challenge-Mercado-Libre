import React from "react";
import PropTypes from "prop-types";

export const CardDetails = ({ producto, description, categoria }) => {
    return (
        <div className="flex-column mx-5">
            {categoria &&
                <p className="card-text"><small className="text-muted">{categoria.name}</small></p>
            }
            <div className="card mb-3" style={{ width: "150vh" }}>
                <div className="row mx-2">
                    <div className="col-md-8 col-sm-2 my-4 d-flex justify-content-center align-items-center">
                        <img src={producto.pictures[0].url} className="img-fluid rounded-start" alt="..." style={{maxWidth: "50vh", maxHeight: "60vh"}} />
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">{producto.condition.toUpperCase()} | {producto.sold_quantity} vendidos</small></p>
                            <h5 className="card-title">{producto.title}</h5>
                            <h3 className="card-text">$ {producto.price}</h3>
                            <button type="button" className="btn btn-primary mt-4 col-12">Comprar</button>
                        </div>
                    </div>
                    {description &&
                        <div className="mx-5 my-3 col-md-10 col-lg-12 col-sm-8 flex-column">
                            <h3>Descripcion del producto</h3>
                            <p className="font-monospace text-wrap col-10" style={{fontSize: "15px", textAlign: "justify"}}>{description.plain_text}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

CardDetails.propTypes = {
    producto: PropTypes.object,
    description: PropTypes.object,
    categoria: PropTypes.object
};
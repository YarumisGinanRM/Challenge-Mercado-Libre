import React from "react";
import PropTypes from "prop-types";

export const CardDetails = ({ producto, description }) => {
    return (
        <div className="flex-column mx-5">
            <p className="card-text"><small className="text-muted">{producto.category_id.name}</small></p>
            <div className="card mb-3" style={{ width: "150vh" }}>
                <div className="row g-0">
                    <div className="col-md-8 my-4 d-flex justify-content-center align-items-center">
                        <img src={producto.pictures[0].url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">{producto.condition.toUpperCase()} | {producto.sold_quantity} vendidos</small></p>
                            <h5 className="card-title">{producto.title}</h5>
                            <h3 className="card-text">$ {producto.price}</h3>
                            <button type="button" className="btn btn-primary mt-4 col-12">Comprar</button>
                        </div>
                    </div>
                    {description &&
                        <div className="mx-5">
                            <h3>Descripcion del producto</h3>
                            <p className="card-title d-flex justify-content-center col-11">{description.plain_text}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

CardDetails.propTypes = {
    producto: PropTypes.object,
    description: PropTypes.object
};
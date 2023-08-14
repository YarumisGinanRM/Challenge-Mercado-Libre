import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardProducts = ({item}) => {
    
    return (
        <div className="border d-flex justify-content-start col-8" style={{minHeight: "200px", background: "white"}}>
            <div className="row m-3">
                <div className="col-4 col-sm-6 d-flex justify-content-center align-items-center" style={{maxHeight: "160px", maxWidth: "160px"}}>
                    <img className="img-fluid rounded-start" alt="..." src={item.thumbnail}  style={{maxHeight: "160px", maxWidth: "160px"}}/>
                </div>
                <div className="col-8 col-sm-6">
                    <Link to={"/Detalle-del-producto/" + item.id} className="text-decoration-none text-dark">
                        <div className="card-body text-start">
                            <h5 className="card-title" >{item.title}</h5>
                            <p className="card-text">${item.price}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

}

CardProducts.propTypes = {
    item: PropTypes.object
};
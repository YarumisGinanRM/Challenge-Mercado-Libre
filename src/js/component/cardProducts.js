import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardProducts = ({item}) => {
    
    return (
        <div className="border d-flex justify-content-around align-items-center col-8" style={{minHeight: "200px", background: "white"}}>
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                    <img className="img-fluid rounded-start" alt="..." src={item.thumbnail}  style={{maxHeight: "160px", maxWidth: "160px"}}/>
                </div>
                <div className="col-md-8">
                    <Link to={"/Detalle-del-producto/" + item.id} className="text-decoration-none text-dark">
                        <div className="card-body text-start">
                            <h5 className="card-title" >{item.title}</h5>
                            <p className="card-text">{item.price}</p>
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
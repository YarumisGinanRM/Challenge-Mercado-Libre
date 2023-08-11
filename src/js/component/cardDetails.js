import React from "react";
import PropTypes from "prop-types";

export const CardDetails = ({producto}) => {

    return (
        <div className="card mb-3" style={{width: "150vh"}}>
            <div className="row g-0">
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <img src="https://http2.mlstatic.com/D_641513-MLV69319278009_052023-O.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardDetails.propTypes = {
    producto: PropTypes.object
};
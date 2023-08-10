import React from "react";

export const CardProducts = () => {

    return (
        <div class="border d-flex justify-content-center align-items-center col-8" style={{height: "200px", background: "white"}}>
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img class="img-fluid rounded-start" alt="..." src="https://http2.mlstatic.com/D_NQ_NP_649252-MLV70962843663_082023-V.webp"  style={{maxHeight: "160px", maxWidth: "160px"}}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body text-start">
                        <h5 class="card-title">Teléfonos Celular Apple iPhone 13 Pro Max 256gb Nuevos</h5>
                        <p class="card-text">U$S 800,55</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
import React from "react";
import './aboutMe.scss';

const AboutMe = () => {
    return (
        <div className="container d-flex flex-column">
            <div className="d-flex col-md-12 center">
                <h1>Acerca De Mi...</h1>
            </div>
            <div className="d-flex">
                <div className="d-flex col-md-6 center">
                    Texto
                </div>
                <div className="d-flex col-md-6 center">
                    Imagen
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
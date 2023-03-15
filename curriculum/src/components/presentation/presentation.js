import React from "react";
import './presentation.scss';
import { FAKE_DB } from "../../DB/db";

const { basics, work, volunteer, education } = FAKE_DB;
const Presentation = () => {
    return (
        <section className="Presentation">
            <div className="Presentation__info">
                <h1>{basics.name}</h1>
                <h2>{basics.label}</h2>
            </div>
            <div className="Presentation__img">
                <img src={basics.image}></img>
            </div>
        </section>
    )
}

export default Presentation;
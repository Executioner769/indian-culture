import React from "react";
import india from "../assets/india.jpg";

export default function Carousel() {
    return (
        <div className="main-container">
            <section class="hero is-l is-fullheight-with-navbar">
                <div className="hero-head"></div>
                <div class="hero-body">
                    <img src={india} alt="Indian Culture and Heritage" />
                </div>
                <div className="hero-foot"></div>
            </section>
        </div>
    );
}

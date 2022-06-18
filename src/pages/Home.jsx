import React from "react";

import Carousel from "../components/Carousel";
import Catagories from "../components/Catagories";

export default function Home() {
    return (
        <main className="main-container-parent">
            <Carousel />
            <Catagories />
        </main>
    );
}

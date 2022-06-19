import React from "react";

import Carousel from "../components/Carousel";
import Categories from "../components/Categories";

export default function Home() {
    return (
        <main className="main-container-parent">
            <Carousel />
            <Categories />
        </main>
    );
}

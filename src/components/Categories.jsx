import React from "react";
import GridItem from "../shared/GridItem";

const categories = [
    {
        image: "https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZm9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Umaid bhawan palace",
        title: "Forts",
    },
    {
        image: "https://images.unsplash.com/photo-1616787671803-e660b92c0d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvbGklMjBmZXN0aXZhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Holi",
        title: "Festivals",
    },
    {
        image: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwbW9udW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Taj Mahal",
        title: "Monuments",
    },
    {
        image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFyYW5hc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: "Varanasi",
        title: "Historic Cities",
    },
    {
        image: "https://images.unsplash.com/photo-1546778316-dfda79f1c84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcml0dWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Pottan theyyam",
        title: "Traditional Rituals",
    },
];

export default function Categories() {
    return (
        <section className="main-container-parent container is-fluid section">
            <div className="main-container has-text-centered">
                <p className="title">Categories</p>
                <div className="grid">
                    {categories.map((category, index) => (
                        <GridItem key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

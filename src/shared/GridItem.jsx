import React from "react";

export default function GridItem(props) {
    const { image, title, alt } = props;
    return (
        <div className="grid-item">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt={alt} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const prevIsOpen = isOpen;
        setIsOpen(!prevIsOpen);
    };

    return (
        <header className="header main-container-parent">
            <nav id="nav" className="navbar is-light main-container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to={"/"}>
                        <img
                            src={logo}
                            alt="Welcome to Indian culture and Heritage"
                        />
                        <p className="navbar-name">
                            Indian Culture and Heritage✊
                        </p>
                    </Link>
                    <div
                        className={`navbar-burger ${isOpen ? "is-active" : ""}`}
                        data-target="navbarExampleTransparentExample"
                        onClick={handleClick}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div
                    id="navbarExampleTransparentExample"
                    className={`navbar-menu ${isOpen ? "is-active" : ""}`}
                >
                    <div className="navbar-start"></div>

                    <div className="navbar-end">
                        <NavLink className="navbar-item" to="/">
                            <GoHome />
                            Home
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

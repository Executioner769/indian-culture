import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdLogin } from "react-icons/md";

export default function Header() {
    return (
        <header className="header main-container-parent">
            <nav id="nav" className="navbar is-white main-container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to={"/"}>
                        <img
                            src={logo}
                            alt="Welcome to Indian culture and Heritage"
                        />
                        <p className="navbar-name">
                            Indian Culture and Heritage
                        </p>
                    </Link>
                    <div
                        className="navbar-burger"
                        data-target="navbarExampleTransparentExample"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div
                    id="navbarExampleTransparentExample"
                    className="navbar-menu"
                >
                    <div className="navbar-start"></div>

                    <div className="navbar-end">
                        <NavLink className="navbar-item" to="/">
                            <GoHome />
                            Home
                        </NavLink>
                        <NavLink className="navbar-item" to="/login">
                            <MdLogin />
                            Login
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

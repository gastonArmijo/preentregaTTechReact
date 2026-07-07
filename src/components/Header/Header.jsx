import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/dota.png";

import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>

            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                    <span>Dota Store</span>
                </Link>
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <Nav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

        </header>
    );
};
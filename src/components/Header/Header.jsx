import { Link } from "react-router-dom";
import logo from "../../assets/dota.png";

import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                    <span> Dota Store</span>
                </Link>
            </div>
            <Nav/>
        </header>
    );
};
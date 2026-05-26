import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li><Link to={"/"}>Home</Link></li>

               
                <li><a href="#resenas">Reseñas</a></li>
                <li><a href="./contacto.html" >Contacto</a></li>
                <li><a href="./carrito.html"> carrito<span id="contador-carrito">0</span></a></li>

                <li><Link to={"/carrrito"}>Carrito</Link></li>
            </ul>
        </nav>
    );
};
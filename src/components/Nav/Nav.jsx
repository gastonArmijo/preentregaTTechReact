import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Nav.css";

export const Nav = ({ menuOpen, setMenuOpen }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const closeMenu = () => {
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={menuOpen ? "nav open" : "nav"}>
      <ul className="nav-list">
        <li>
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>
        </li>

        <li>
          <Link to="/category/arcana" onClick={closeMenu}>
            Arcanas
          </Link>
        </li>

        <li>
          <Link to="/category/inmortales" onClick={closeMenu}>
            Inmortales
          </Link>
        </li>

        <li>
          <Link to="/category/tesoros" onClick={closeMenu}>
            Tesoros
          </Link>
        </li>

        <li>
          <Link to="/carrito" onClick={closeMenu}>
            Carrito
            {totalItems > 0 && (
              <span className="incart">{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartList } from "./CartList";
import { CartSumary } from "./CartSumary";
import "./Cart.css";

export const CartView = () => {
    const {cart} = useCart();

    return(
        <section className="cart-container">
            <h1>Tu carrito de compras</h1>

            {cart.length ? (
                <>
                    <CartList />
                    <CartSumary />
                </>
            ) : (
                <>
                    <p className="empity-cart"> El carrito esta vacio</p>
                    <Link className="btn primary bg-primary" to={"/"}>
                        Volver
                    </Link>
                </>
            )}
        </section>
    );
};
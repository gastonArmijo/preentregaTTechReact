import { useCart } from "../../context/CartContext";

export const CartSumary = () => {
    const {getCartTotal, checkout} = useCart();

    const total = getCartTotal();

    return (
        <>
            <p>Total a pagar: ${total}</p>
            <button className="btn bg-success primary" onClick={checkout}>
                Finalizar compra
            </button>
        </>
    );
};
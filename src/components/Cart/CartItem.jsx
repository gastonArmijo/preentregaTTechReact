import { useCart } from "../../context/CartContext";
import {Item} from "../Item/Item";

export const CartItem = () => {
    const { removeItem} = useCart();

    return(
        <Item {...item}>
            <button
            className="btn bg-delete primary"
            onClick={() => removeItem(Item.id)}
            >
                Eliminar
            </button>
        </Item>
    );
};
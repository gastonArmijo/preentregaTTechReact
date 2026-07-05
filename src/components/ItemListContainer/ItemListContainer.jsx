import { useEffect, useState } from "react";
import {ItemList} from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/ProductsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    //tomamos category del useParams para poder filtrar
    const {category} = useParams();

    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        //usamos la funcion con 2 uso: trae todo o filtra si category existe
        getByCategory(category)
            .then((data) => setProducts(data))
            .catch((err) => console.log("hubo un error", err))
            .finally(() => setLoading(false));

        
    }, [category]);

    if(loading) return <p>Cargando...</p>;

    return (
        <section>
            <ItemList products={products}/>
        </section>
    );

};